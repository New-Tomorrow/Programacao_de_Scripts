import { Router, Request, Response } from "express";
import teams from './team';
import match from './match';

const routes = Router();

routes.use("/match", match);
routes.use("/team", teams);

routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
