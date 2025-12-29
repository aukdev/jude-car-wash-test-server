import { Router } from "express";
import { HTTPSTATUS } from "../const/http-server-config.mjs";
const rootRouter = Router();
// server check
rootRouter.get("/", (_req, res) => res.sendStatus(HTTPSTATUS.OK));
// join routes
import authRouter from "./auth.mjs";
import featuresRouter from "./features/index.mjs";
rootRouter.use("/auth", authRouter);
rootRouter.use("/features", featuresRouter);
export default rootRouter;
//# sourceMappingURL=index.mjs.map