import { Router } from "express";
import { HTTPSTATUS, HTTPSTATUS_MSG } from "../../const/http-server-config.mjs";
import { clientResponse, RESPONSE } from "../../dto/response.mjs";
import upload from "../../middleware/file-upload.mjs";
import { getAllMonthly, getAllByDate, getById, checkInvoiceNumber, create, mainPDFCreate, update, mainPDFUpdate, invoiceGen, startingInvoiceCreate, getByMultiBookingId, completeJob, } from "../../controller/features/invoice.mjs";
const invoiceRouter = Router();
//get all monthly invoice
invoiceRouter.get("/get-all-monthly", async (req, res) => {
    const page = req.query.page;
    const size = req.query.size;
    const data = await getAllMonthly(page, size);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
//get all daylly invoice
invoiceRouter.get("/get-by-date", async (req, res) => {
    const date = req.query.date;
    const page = req.query.page;
    const size = req.query.size;
    const data = await getAllByDate(date, page, size);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
// get invoice by id
invoiceRouter.get("/:id", async (req, res) => {
    const data = await getById(req.params.id);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
// get by multi booking id
invoiceRouter.get("/get-by-multibooking/:id", async (req, res) => {
    const data = await getByMultiBookingId(req.params.id);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
// job complete
invoiceRouter.get("/job-complete/:bookId", async (req, res) => {
    const data = await completeJob(req.params.bookId);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
// create new invoice
invoiceRouter.post("/", async (req, res) => {
    const data = await create(req.body);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.CREATED)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, data, undefined));
});
// create main pdf
invoiceRouter.post("/main-pdf", async (req, res) => {
    const data = await mainPDFCreate(req.body);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.CREATED)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, data, undefined));
});
// starting invoice created
invoiceRouter.post("/starting-inovice", async (req, res) => {
    const data = await startingInvoiceCreate(req.body);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.CREATED)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, data, undefined));
});
// update main-pdf
invoiceRouter.put("/main-pdf", async (req, res) => {
    const data = await mainPDFUpdate(req.body);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
// update invoice
invoiceRouter.put("/:id", async (req, res) => {
    const data = await update(req.params.id, req.body);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
// check invoice number
invoiceRouter.post("/check-invoice-number", async (req, res) => {
    const data = await checkInvoiceNumber(req.body.invoiceId);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    else if (data === "data") {
        res
            .status(HTTPSTATUS.BAD_REQUEST)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.BAD_REQUEST, undefined, "invoice id is already exist."));
        return;
    }
    else if (data === "ok") {
        res
            .status(HTTPSTATUS.OK)
            .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, `you can use ${req.body.invoiceId} as invoice id`, undefined));
        return;
    }
});
// genarate invoice pdf
invoiceRouter.post("/invoice-pdf", async (req, res) => {
    const data = await invoiceGen(req.body.id);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    res
        .status(HTTPSTATUS.OK)
        .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined));
});
// client signature
invoiceRouter.post("/signature", (req, res) => {
    upload.single("signature")(req, res, (err) => {
        const reqWithFile = req;
        if (err) {
            res
                .status(HTTPSTATUS.SERVER_ERROR)
                .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
            return;
        }
        res
            .status(HTTPSTATUS.CREATED)
            .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, { file: `/data/${reqWithFile.file?.filename}` }, undefined));
    });
});
// payment slip
invoiceRouter.post("/payment-slip", (req, res) => {
    upload.single("payment-slip")(req, res, (err) => {
        const reqWithFile = req;
        if (err) {
            res
                .status(HTTPSTATUS.SERVER_ERROR)
                .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
            return;
        }
        res
            .status(HTTPSTATUS.CREATED)
            .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, { file: `/data/${reqWithFile.file?.filename}` }, undefined));
    });
});
// payment slip
invoiceRouter.post("/invoice-pdf-file", (req, res) => {
    upload.single("invoice-pdf-file")(req, res, (err) => {
        const reqWithFile = req;
        if (err) {
            res
                .status(HTTPSTATUS.SERVER_ERROR)
                .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
            return;
        }
        res
            .status(HTTPSTATUS.CREATED)
            .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, { file: `/data/${reqWithFile.file?.filename}` }, undefined));
    });
});
// vehical issure
invoiceRouter.post("/vehical-issure", (req, res) => {
    upload.single("vehical-issure")(req, res, (err) => {
        const reqWithFile = req;
        if (err) {
            res
                .status(HTTPSTATUS.SERVER_ERROR)
                .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
            return;
        }
        res
            .status(HTTPSTATUS.CREATED)
            .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, { file: `/data/${reqWithFile.file?.filename}` }, undefined));
    });
});
export default invoiceRouter;
//# sourceMappingURL=invoice.mjs.map