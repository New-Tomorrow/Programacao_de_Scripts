import { Router, Request, Response } from "express";
import teams from './team';
import metch from './metch';

const routes = Router();

routes.use("/match", metch);
routes.use("/team", teams);

routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
