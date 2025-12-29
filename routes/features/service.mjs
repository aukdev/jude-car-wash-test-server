import { Router } from "express";
import { HTTPSTATUS, HTTPSTATUS_MSG } from "../../const/http-server-config.mjs";
import { createService, deleteService, updateService, } from "../../controller/features/service.mjs";
import { clientResponse, RESPONSE } from "../../dto/response.mjs";
const serviceRouter = Router();
// create new service
serviceRouter.post("/", async (req, res) => {
    const data = await createService(req.body);
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
// update service
serviceRouter.put("/:id", async (req, res) => {
    const data = await updateService(req.params.id, req.body);
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
// delete service
serviceRouter.delete("/:id", async (req, res) => {
    const data = await deleteService(req.params.id);
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
export default serviceRouter;
//# sourceMappingURL=service.mjs.map