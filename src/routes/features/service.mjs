import { Router } from "express";
import { HTTPSTATUS, HTTPSTATUS_MSG } from "../../const/http-server-config.mjs";
import {
  createService,
  deleteService,
  updateService,
} from "../../controller/features/service.mjs";
import { clientResponse, RESPONSE } from "../../dto/response.mjs";

const serviceRouter = Router();

// create new service
serviceRouter.post("/", async (c, w) => {
  const data = await createService(c.body);
  if (data === "error") {
    w.status(HTTPSTATUS.SERVER_ERROR).json(
      clientResponse(
        RESPONSE.ERROR,
        HTTPSTATUS.SERVER_ERROR,
        undefined,
        HTTPSTATUS_MSG.SERVER_ERROR
      )
    );
    return;
  }
  w.status(HTTPSTATUS.CREATED).json(
    clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.CREATED, data, undefined)
  );
});

// update service
serviceRouter.put("/:id", async (c, w) => {
  const data = await updateService(c.params.id, c.body);
  if (data === "error") {
    w.status(HTTPSTATUS.SERVER_ERROR).json(
      clientResponse(
        RESPONSE.ERROR,
        HTTPSTATUS.SERVER_ERROR,
        undefined,
        HTTPSTATUS_MSG.SERVER_ERROR
      )
    );
    return;
  }
  w.status(HTTPSTATUS.OK).json(
    clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined)
  );
});

// delete service
serviceRouter.delete("/:id", async (c, w) => {
  const data = await deleteService(c.params.id);
  if (data === "error") {
    w.status(HTTPSTATUS.SERVER_ERROR).json(
      clientResponse(
        RESPONSE.ERROR,
        HTTPSTATUS.SERVER_ERROR,
        undefined,
        HTTPSTATUS_MSG.SERVER_ERROR
      )
    );
    return;
  }
  w.status(HTTPSTATUS.OK).json(
    clientResponse(RESPONSE.SUCCESS, HTTPSTATUS.OK, data, undefined)
  );
});

export default serviceRouter;
