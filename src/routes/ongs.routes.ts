import { Router } from "express";
import OngsController from "../controllers/OngsController";
import checksOngValidate from "../middlewares/checksOngValidate";
import requestSchema from "../middlewares/checksOngValidator"


const ongsRouter = Router();
const ongsController = new OngsController();

ongsRouter.post('/', checksOngValidate(requestSchema), ongsController.create);

export default ongsRouter;