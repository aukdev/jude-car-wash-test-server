import { Router } from "express";
import { HTTPSTATUS, HTTPSTATUS_MSG } from "../../const/http-server-config.mjs";
import { clientResponse, RESPONSE } from "../../dto/response.mjs";
import { checkPhone, checkUsername, create, deleteClient, getAllCustomers, getAllStaff, getById, searchByPhone, update, } from "../../controller/features/client.mjs";
const clientRouter = Router();
// get all customers
clientRouter.get("/get-all-customers", async (req, res) => {
    const data = await getAllCustomers(req.query.page, req.query.size);
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
// get all staff
clientRouter.get("/get-all-staff", async (req, res) => {
    const data = await getAllStaff(req.query.page, req.query.size);
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
// get by id
clientRouter.get("/get-by-id/:id", async (req, res) => {
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
// create
clientRouter.post("/", async (req, res) => {
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
// search by phone
clientRouter.post("/search-by-phone", async (req, res) => {
    const data = await searchByPhone(req.body.Phone);
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
// check username
clientRouter.post("/check-username", async (req, res) => {
    const data = await checkUsername(req.body.Username);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    else if (data === "data") {
        res
            .status(HTTPSTATUS.BAD_REQUEST)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.BAD_REQUEST, undefined, "username is already exist."));
        return;
    }
    else if (data === "ok") {
        res
            .status(HTTPSTATUS.OK)
            .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, `you can use ${req.body.Username} for this user`, undefined));
        return;
    }
});
// check phone
clientRouter.post("/check-phone", async (req, res) => {
    const data = await checkPhone(req.body.phone);
    if (data === "error") {
        res
            .status(HTTPSTATUS.SERVER_ERROR)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.SERVER_ERROR, undefined, HTTPSTATUS_MSG.SERVER_ERROR));
        return;
    }
    else if (data === "data") {
        res
            .status(HTTPSTATUS.BAD_REQUEST)
            .json(clientResponse(RESPONSE.ERROR, HTTPSTATUS.BAD_REQUEST, undefined, "phone is already exist."));
        return;
    }
    else if (data === "ok") {
        res
            .status(HTTPSTATUS.OK)
            .json(clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, `you can use ${req.body.phone} for this user`, undefined));
        return;
    }
});
// update
clientRouter.put("/:id", async (req, res) => {
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
// delete
clientRouter.delete("/:id", async (req, res) => {
    const data = await deleteClient(req.params.id);
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
export default clientRouter;
//# sourceMappingURL=client.mjs.map