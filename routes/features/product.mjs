import { Router } from "express";
import upload from "../../middleware/file-upload.mjs";
import { HTTPSTATUS, HTTPSTATUS_MSG } from "../../const/http-server-config.mjs";
import { clientResponse, RESPONSE } from "../../dto/response.mjs";
import { create, deleteData, getAll, update, } from "../../controller/features/product.mjs";
const productRoute = Router();
// get all
productRoute.get("/", async (_req, res) => {
    const data = await getAll();
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
// create
productRoute.post("/", async (req, res) => {
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
// update
productRoute.put("/:id", async (req, res) => {
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
// product image
productRoute.post("/product-image", (req, res) => {
    upload.single("product-image")(req, res, (err) => {
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
// delete
productRoute.delete("/:id", async (req, res) => {
    const data = await deleteData(req.params.id);
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
export default productRoute;
//# sourceMappingURL=product.mjs.map