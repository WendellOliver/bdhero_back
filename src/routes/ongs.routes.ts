import { Router } from "express";
import OngsController from "../controllers/OngsController";
import checksOngValidate from "../middlewares/checksOngValidate";
import checksOngValidator from "../middlewares/checksOngValidator";


const ongsRouter = Router();
const ongsController = new OngsController();

ongsRouter.post('/', checksOngValidate(checksOngValidator), ongsController.create);

export default ongsRouter;