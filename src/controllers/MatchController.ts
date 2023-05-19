import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Match } from '../entities/Match';
import { Teams } from '../entities/Team';

class MatchController {

  public async create(req: Request, res: Response): Promise<Response> {
    const { date, idhost, idvisitor } = req.body;

    const teamsTable = await AppDataSource.getRepository(Teams);
    const host = await teamsTable.findOneBy({ id: idhost });
    const visitor = await teamsTable.findOneBy({ id: idvisitor });
    
    if(!host){
      return res.json({ error: "Mandante desconhecido" })
    }
    if(!visitor){
      return res.json({ error: "Visitante desconhecido" })
    }

    const obj = new Match();
    obj.date = date;
    obj.host = host;
    obj.visitor = visitor;

    const match: any = await AppDataSource.getRepository(Match).save(obj).catch((e) => {

    });
    if (match.id) {
      return res.json({
        host: match.host,
        visitor: match.visitor,
        date: match.date,
        id: match.id

      });
    }
    return res.json({ error: "Erro ao salvar o match" })

  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const r = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Match)
    .where("id = :id", { id: id })
    .execute()
    return res.json(r)

  }

  async list(req: Request, res: Response): Promise<Response> {
    const {limit, offset} = req.body

    const Matches = await AppDataSource.getRepository(Match).find({
      relations:{host:true, visitor:true},
      order:{date:"DESC"},
      take:limit,
      skip:offset
    })
    return res.json(Matches)
  }

  public async idlist(req: Request, res: Response): Promise<Response> {
    const id: any = req.params.id
    const match = AppDataSource.getRepository(Match)
      .createQueryBuilder("match")
      .leftJoinAndSelect("match.host", "host")
      .leftJoinAndSelect("match.visitor", "visitor")
      .where("match.host = :host", { host: id })
      .orWhere("match.visitor = :visitor", { visitor: id })
      .getMany()
    return res.json((await match))

  }


  public async update(req: Request, res: Response): Promise<Response> {
    const { id, date, idhost, idvisitor } = req.body;

    const teamsTable = await AppDataSource.getRepository(Teams);
    const host = await teamsTable.findOneBy({ id: idhost });
    const visitor = await teamsTable.findOneBy({ id: idvisitor });
    if(!host){
      return res.json({ error: "Mandante desconhecido" })
    }
    if(!visitor){
      return res.json({ error: "Visitante desconhecido" })
    }
    const match = AppDataSource.getRepository(Match)

    const obj = await match.findOneBy({
      id: id,
    })

    obj.date = date;
    obj.host = host;
    obj.visitor = visitor;

    await match.save(obj)
    return res.json(obj)

  }

}
export default new MatchController();


