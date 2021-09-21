import { Router } from "express";
import checksOngValidate from "../middlewares/checksOngValidate";
import checksOngValidator from "../middlewares/checksOngValidator";
import ongsRouter from "./ongs.routes";

const routes = Router();

routes.use("/ongs", ongsRouter);

export default routes 
