import { Router } from "express";
import IncidentsController from "../controllers/IncidentsController";
import checksIncidentValidate from "../middlewares/checksIncidentValidate";
import requestSchema from "../middlewares/checksIncidentValidator"
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const incidentsRouter = Router();
const incidentsController = new IncidentsController();

incidentsRouter.use(ensureAuthenticated)

incidentsRouter.post('/', checksIncidentValidate(requestSchema), incidentsController.create);
incidentsRouter.get('/', incidentsController.find);
incidentsRouter.delete('/:id', incidentsController.delete)

export default incidentsRouter;