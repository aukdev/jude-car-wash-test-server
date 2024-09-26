import { Router } from "express";
import {
  getAllCancelBookingMonthly,
  getAllMonthly,
  getBankTransferMonthly,
  getCashMonthly,
  getPOSMonthly,
} from "../../controller/features/report.mjs";
import { HTTPSTATUS, HTTPSTATUS_MSG } from "../../const/http-server-config.mjs";
import { clientResponse, RESPONSE } from "../../dto/response.mjs";

const reportRouter = Router();

//get all monthly invoice
reportRouter.get("/get-all-monthly", async (c, w) => {
  const page = c.query.page;
  const size = c.query.size;
  const data = await getAllMonthly(page, size);

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

//get all pos monthly invoice
reportRouter.get("/get-pos-monthly", async (c, w) => {
  const page = c.query.page;
  const size = c.query.size;
  const data = await getPOSMonthly(page, size);

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

//get all cash monthly invoice
reportRouter.get("/get-cash-monthly", async (c, w) => {
  const page = c.query.page;
  const size = c.query.size;
  const data = await getCashMonthly(page, size);

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

//get all bank transfer monthly invoice
reportRouter.get("/get-bank-transfer-monthly", async (c, w) => {
  const page = c.query.page;
  const size = c.query.size;
  const data = await getBankTransferMonthly(page, size);

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

//get all cancel booking monthly invoice
reportRouter.get("/get-cancel-booking-monthly", async (c, w) => {
  const page = c.query.page;
  const size = c.query.size;
  const data = await getAllCancelBookingMonthly(page, size);

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

export default reportRouter;
