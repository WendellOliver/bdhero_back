import { Router } from "express";
import IncidentsController from "../controllers/IncidentsController";

const incidentsRouter = Router();
const incidentsController = new IncidentsController();

incidentsRouter.post('/', incidentsController.create);

export default incidentsRouter;