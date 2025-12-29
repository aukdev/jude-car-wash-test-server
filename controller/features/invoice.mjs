import DB from "../../db/db.mjs";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";
import { PDFDocument, rgb } from "pdf-lib";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { cwd } from "node:process";
const __dirname = dirname(fileURLToPath(import.meta.url));
// get All of this month
export const getAllMonthly = async (page, size) => {
    const offset = (Number(page) - 1) * Number(size);
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59, 999);
    try {
        const data = await DB.invoice.findMany({
            skip: offset,
            take: Number(size),
            orderBy: {
                id: "desc",
            },
            include: {
                Client: {
                    select: {
                        Name: true,
                    },
                },
            },
            where: {
                StartingPoint: false,
                createdAt: {
                    gte: startOfMonth,
                    lte: endOfMonth,
                },
            },
        });
        const count = await DB.invoice.count({
            where: {
                StartingPoint: false,
                createdAt: {
                    gte: startOfMonth,
                    lte: endOfMonth,
                },
            },
        });
        return { data, count, page, pageSize: size };
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// get All by date
export const getAllByDate = async (date, page, size) => {
    const offset = (Number(page) - 1) * Number(size);
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    try {
        const data = await DB.invoice.findMany({
            skip: offset,
            take: Number(size),
            orderBy: {
                id: "desc",
            },
            include: {
                Client: {
                    select: {
                        Name: true,
                    },
                },
            },
            where: {
                StartingPoint: false,
                Date: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        });
        const count = await DB.invoice.count({
            where: {
                StartingPoint: false,
                Date: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        });
        return { data, count, page, pageSize: size };
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// get invoice by id
export const getById = async (id) => {
    try {
        const data = await DB.invoice.findUnique({
            where: { id: Number(id) },
            include: {
                Booking: {
                    select: {
                        Contact: true,
                        ServiceType: true,
                        ServiceDetails: true,
                        Date: true,
                    },
                },
                Client: {
                    select: {
                        Name: true,
                    },
                },
            },
        });
        if (data && data.invoiceId === null) {
            // get last invoice Id
            const lastInvoice = await DB.invoice.findFirst({
                orderBy: { invoiceId: "desc" },
                select: { invoiceId: true },
                where: {
                    // PaymentStatus: "success",
                    invoiceId: {
                        not: null,
                    },
                },
            });
            if (lastInvoice && lastInvoice.invoiceId !== null) {
                data.invoiceId = lastInvoice.invoiceId + 1;
            }
        }
        if (!data)
            return "error";
        const { Booking, Client, ...rest } = data;
        return {
            ...rest,
            BookingDate: Booking?.Date,
            CustomerName: Client?.Name,
            CustomerPhone: Booking?.Contact,
            InvoiceType: Booking?.ServiceType,
            InvoiceDetails: Booking?.ServiceDetails,
        };
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// get by multi booking id
export const getByMultiBookingId = async (multiBookingId) => {
    try {
        const data = await DB.invoice.findMany({
            where: {
                MultiBookingId: Number(multiBookingId),
            },
        });
        return data;
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// check invoice number
export const checkInvoiceNumber = async (invoiceId) => {
    try {
        const count = await DB.invoice.count({
            where: {
                invoiceId: Number(invoiceId),
            },
        });
        if (count)
            return "data";
        else
            return "ok";
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// create new invoice
export const create = async (data) => {
    try {
        const newData = await DB.invoice.create({
            data: {
                ...data,
            },
        });
        if (newData.BookId !== null) {
            await DB.booking.update({
                where: { id: newData.BookId },
                data: {
                    BookingStatus: "on-proccess",
                },
            });
        }
        return newData.id;
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// starting invoice create
export const startingInvoiceCreate = async (data) => {
    try {
        const newData = await DB.invoice.create({
            data,
        });
        return `starting invoice created id start by: ${newData.invoiceId}`;
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// update invoice
export const update = async (id, data) => {
    try {
        const { InvoiceDate, ...restData } = data;
        const updateData = await DB.invoice.update({
            where: {
                id: Number(id),
            },
            data: restData,
        });
        return `invoice updated id: ${updateData.id}`;
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
export const mainPDFCreate = async (data) => {
    const file = `${data.file}`.split("/");
    const fileName = file[file.length - 1];
    if (!fileName)
        return "error";
    try {
        const sendData = DB.mainPDF.create({
            data: { File: fileName },
        });
        return sendData;
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// mainpdf update
export const mainPDFUpdate = async (data) => {
    const file = `${data.file}`.split("/");
    try {
        const preData = await DB.mainPDF.findFirst({ orderBy: { id: "desc" } });
        if (!preData)
            return "error";
        const fileName = file[file.length - 1];
        if (!fileName)
            return "error";
        const updataData = await DB.mainPDF.update({
            where: { id: preData.id },
            data: {
                File: fileName,
            },
        });
        return updataData;
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// complet job
export const completeJob = async (id) => {
    try {
        await DB.booking.update({
            where: { id: Number(id) },
            data: {
                BookingStatus: "completed",
            },
        });
        return "job completed";
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
// invoice generate
export const invoiceGen = async (id) => {
    try {
        const invoiceData = await DB.$transaction(async (tx) => {
            const invoice = await tx.invoice.findUnique({
                where: { id: Number(id) },
                include: {
                    Booking: {
                        select: {
                            Contact: true,
                            ServiceType: true,
                            ServiceDetails: true,
                        },
                    },
                    Client: { select: { Name: true } },
                },
            });
            if (!invoice)
                throw new Error("invoice_not_found");
            if (invoice.BookId === null)
                throw new Error("invoice_missing_booking");
            let nextInvoiceId = invoice.invoiceId ?? null;
            if (nextInvoiceId === null) {
                const lastInvoice = await tx.invoice.findFirst({
                    orderBy: { invoiceId: "desc" },
                    select: { invoiceId: true, id: true },
                    where: {
                        invoiceId: { not: null },
                    },
                });
                nextInvoiceId = (lastInvoice?.invoiceId ?? 0) + 1;
                await tx.invoice.update({
                    where: { id: invoice.id },
                    data: { invoiceId: nextInvoiceId },
                });
            }
            await tx.booking.update({
                where: { id: invoice.BookId },
                data: { BookingStatus: "completed" },
            });
            return { ...invoice, invoiceId: nextInvoiceId };
        }, { isolationLevel: "Serializable" });
        // get main pdf
        const dbMainPDFData = await DB.mainPDF.findFirst({
            orderBy: { id: "desc" },
        });
        if (!dbMainPDFData)
            return "error";
        // read file
        const pdfBytes = readFileSync(join(cwd(), "src", "public", dbMainPDFData.File));
        // pdf doc load
        const pdfDoc = await PDFDocument.load(pdfBytes);
        // get pdf pages
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        if (!firstPage)
            return "error";
        let startYoffSet = 182;
        const input1 = [
            invoiceData.Client?.Name || "",
            invoiceData.Booking?.Contact || "",
            `${invoiceData.Date}`.split("+")[0],
            invoiceData.BookId?.toString() ?? "",
            invoiceData.invoiceId?.toString() || "",
            invoiceData.Booking?.ServiceType || "",
        ];
        const input2 = [
            invoiceData.StartTime || "",
            invoiceData.EndTime || "",
            invoiceData.NumberOfCars?.toString() || "",
            invoiceData?.VehicalNoPlates ? invoiceData.VehicalNoPlates : "",
            invoiceData.PaymentMethod || "",
            Number(invoiceData.InvoiceAmount).toLocaleString("en-US", {
                style: "currency",
                currency: "QAR",
            }),
            invoiceData.Booking?.ServiceDetails || "",
        ];
        input1.forEach((d) => {
            // Add the text to the page
            firstPage.drawText(d ?? "", {
                x: 175,
                y: firstPage.getHeight() - startYoffSet,
                size: 12,
                color: rgb(0, 0, 0),
            });
            startYoffSet += 15;
        });
        // second input
        startYoffSet += 22;
        input2.forEach((d, i) => {
            firstPage.drawText(d, {
                x: 175,
                y: firstPage.getHeight() - startYoffSet,
                size: 11,
                color: rgb(0, 0, 0),
            });
            startYoffSet += 15;
            if (i < 3)
                startYoffSet -= i;
            else
                startYoffSet -= 1;
        });
        // if have remaks then write it to doc
        if (invoiceData.Remarks) {
            const formatText = invoiceData.Remarks;
            let aaa = 0;
            let remarkStart = 415;
            while (aaa < formatText.length) {
                const writeText = formatText.substring(aaa, aaa + 90);
                aaa += 90;
                // add remark
                firstPage.drawText(writeText, {
                    x: 75,
                    y: remarkStart,
                    size: 10,
                    color: rgb(0, 0, 0),
                });
                remarkStart -= 13;
            }
        }
        // print customer signature
        if (invoiceData.CustomerSignature) {
            const cusSign = `${invoiceData.CustomerSignature}`.split("/");
            const lastSegment = cusSign[cusSign.length - 1];
            if (lastSegment) {
                const imageBytes = readFileSync(join(cwd(), "src", "public", lastSegment));
                const pngImage = await pdfDoc.embedPng(imageBytes);
                // Get the image dimensions
                const pngDims = pngImage.scale(0.5);
                // Add the image to the page
                firstPage.drawImage(pngImage, {
                    x: 350,
                    y: 230,
                    width: pngDims.width,
                    height: pngDims.height,
                });
            }
        }
        // new page images
        if (invoiceData.IssureImage1 ||
            invoiceData.IssureImage2 ||
            invoiceData.IssureImage3 ||
            invoiceData.IssureImage4 ||
            invoiceData.IssureImage5 ||
            invoiceData.IssureImage6) {
            const newPage = pdfDoc.addPage();
            let newPageHeight = newPage.getHeight();
            // image 1
            if (invoiceData.IssureImage1) {
                const issImg = `${invoiceData.IssureImage1}`.split("/");
                const lastSegment = issImg[issImg.length - 1];
                if (lastSegment) {
                    const issureImageBytes = readFileSync(join(cwd(), "src", "public", lastSegment));
                    const jpgImage = await pdfDoc.embedJpg(issureImageBytes);
                    newPage.drawImage(jpgImage, {
                        x: 50,
                        y: newPageHeight - 200,
                        width: 208,
                        height: 156,
                    });
                }
            }
            // image 2
            if (invoiceData.IssureImage2) {
                const issImg = `${invoiceData.IssureImage2}`.split("/");
                const lastSegment = issImg[issImg.length - 1];
                if (lastSegment) {
                    const issureImageBytes = readFileSync(join(cwd(), "src", "public", lastSegment));
                    const jpgImage = await pdfDoc.embedJpg(issureImageBytes);
                    newPage.drawImage(jpgImage, {
                        x: 270,
                        y: newPageHeight - 200,
                        width: 208,
                        height: 156,
                    });
                }
            }
            // image 3
            if (invoiceData.IssureImage3) {
                const issImg = `${invoiceData.IssureImage3}`.split("/");
                const lastSegment = issImg[issImg.length - 1];
                if (lastSegment) {
                    const issureImageBytes = readFileSync(join(cwd(), "src", "public", lastSegment));
                    const jpgImage = await pdfDoc.embedJpg(issureImageBytes);
                    newPage.drawImage(jpgImage, {
                        x: 50,
                        y: newPageHeight - 370,
                        width: 208,
                        height: 156,
                    });
                }
            }
            // image 4
            if (invoiceData.IssureImage4) {
                const issImg = `${invoiceData.IssureImage4}`.split("/");
                const lastSegment = issImg[issImg.length - 1];
                if (lastSegment) {
                    const issureImageBytes = readFileSync(join(cwd(), "src", "public", lastSegment));
                    const jpgImage = await pdfDoc.embedJpg(issureImageBytes);
                    newPage.drawImage(jpgImage, {
                        x: 270,
                        y: newPageHeight - 370,
                        width: 208,
                        height: 156,
                    });
                }
            }
            // image 5
            if (invoiceData.IssureImage5) {
                const issImg = `${invoiceData.IssureImage5}`.split("/");
                const lastSegment = issImg[issImg.length - 1];
                if (lastSegment) {
                    const issureImageBytes = readFileSync(join(cwd(), "src", "public", lastSegment));
                    const jpgImage = await pdfDoc.embedJpg(issureImageBytes);
                    newPage.drawImage(jpgImage, {
                        x: 50,
                        y: newPageHeight - 540,
                        width: 208,
                        height: 156,
                    });
                }
            }
            // image 6
            if (invoiceData.IssureImage6) {
                const issImg = `${invoiceData.IssureImage6}`.split("/");
                const lastSegment = issImg[issImg.length - 1];
                if (lastSegment) {
                    const issureImageBytes = readFileSync(join(cwd(), "src", "public", lastSegment));
                    const jpgImage = await pdfDoc.embedJpg(issureImageBytes);
                    newPage.drawImage(jpgImage, {
                        x: 270,
                        y: newPageHeight - 540,
                        width: 208,
                        height: 156,
                    });
                }
            }
        }
        // Serialize the PDFDocument to bytes
        const outPdfBytes = await pdfDoc.save();
        const filename = Date.now();
        // Write the PDF to a file
        writeFileSync(join(cwd(), "src", "public", `${filename}_invoice.pdf`), outPdfBytes);
        // update generated invoice to db
        await DB.invoice.update({
            where: { id: invoiceData.id },
            data: { InvoicePDF: `/data/${filename}_invoice.pdf` },
        });
        return { file: `/data/${filename}_invoice.pdf` };
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
//# sourceMappingURL=invoice.mjs.map