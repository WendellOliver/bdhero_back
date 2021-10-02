import { Router } from "express";
import IncidentsController from "../controllers/IncidentsController";

const IncidentsRouter = Router();
const incidentsController = new IncidentsController();
