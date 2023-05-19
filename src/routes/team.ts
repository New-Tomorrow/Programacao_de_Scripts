import { Router } from "express";
import TeamController from "../controllers/TeamController";

const routes = Router();

routes.post('/', TeamController.create);
routes.put('/', TeamController.update);
routes.delete('/', TeamController.delete);
routes.get('/', TeamController.list);
routes.get('/:termo', TeamController.termolist);

export default routes;