import { Router } from "express";
import IncidentsController from "../controllers/IncidentsController";
import checksIncidentValidate from "../middlewares/checksIncidentValidate";
import requestSchema from "../middlewares/checksIncidentValidator"

const incidentsRouter = Router();
const incidentsController = new IncidentsController();

incidentsRouter.post('/', checksIncidentValidate(requestSchema), incidentsController.create);

export default incidentsRouter;