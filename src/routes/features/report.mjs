import { Router } from "express";
import {
  getAllCalcMonthly,
  getAllCancelBookingMonthly,
  getAllMonthly,
  getBankTransferCalcMonthly,
  getBankTransferMonthly,
  getCashCalcMonthly,
  getCashMonthly,
  getJobsMonthly,
  getMonthlyBookingForCustomer,
  getPOSCalcMonthly,
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

//get all monthly invoice calc
reportRouter.get("/get-all-monthly-calc", async (_, w) => {
  const data = await getAllCalcMonthly();

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

//get all pos monthly invoice calc
reportRouter.get("/get-pos-monthly-calc", async (_, w) => {
  const data = await getPOSCalcMonthly();

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

//get all cash monthly invoice calc
reportRouter.get("/get-cash-monthly-calc", async (_, w) => {
  const data = await getCashCalcMonthly();

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

// get jobs monthly
reportRouter.get("/get-jobs-monthly", async (c, w) => {
  const data = await getJobsMonthly(
    `${c.query.team}`.split(",").map((d) => Number(d))
  );
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

// get jobs monthly
reportRouter.get("/get-customer-bookings-monthly/:clientId", async (c, w) => {
  const data = await getMonthlyBookingForCustomer(c.params.clientId);
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

//get all bank transfer monthly invoice calc
reportRouter.get("/get-bank-transfer-monthly-calc", async (_, w) => {
  const data = await getBankTransferCalcMonthly();

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
