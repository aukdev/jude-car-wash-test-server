import { Router } from "express";
import { HTTPSTATUS, HTTPSTATUS_MSG } from "../../const/http-server-config.mjs";
import { createType, deleteType, getAll, getTypeById, updateType, } from "../../controller/features/service.mjs";
import { clientResponse, RESPONSE } from "../../dto/response.mjs";
const serviceTypeRouter = Router();
// get all
serviceTypeRouter.get("/", async (_req, res) => {
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
// get all
serviceTypeRouter.get("/:id", async (req, res) => {
    const data = await getTypeById(req.params.id);
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
// create type
serviceTypeRouter.post("/", async (req, res) => {
    const data = await createType(req.body);
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
// update type
serviceTypeRouter.put("/:id", async (req, res) => {
    const data = await updateType(req.params.id, req.body);
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
// delete type
serviceTypeRouter.delete("/:id", async (req, res) => {
    const data = await deleteType(req.params.id);
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
export default serviceTypeRouter;
//# sourceMappingURL=service-type.mjs.map