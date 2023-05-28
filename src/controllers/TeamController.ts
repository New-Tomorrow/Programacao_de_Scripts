import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Teams } from '../entities/Team';

class TeamsController {

  public async create(req: Request, res: Response): Promise<Response> {

    const { name } = req.body;
    if (!name || name.trim() === "") {
      return res.json({ error: " o nome é necessário" });
    }

    const obj = new Teams();
    obj.name = name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())

    const teams: any = await AppDataSource.getRepository(Teams).save(obj).catch((e) => {
      return { error: "o nome já existe" };

    });
    if (teams.id) {
      return res.json({
        name: teams.name,
        id: teams.id
      });
    }
    return res.json(teams)
  }


  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const r = await AppDataSource
      .createQueryBuilder()
      .delete()
      .from(Teams)
      .where("id = :id", { id: id })
      .execute()
    return res.json(r)

  }

  async list(req: Request, res: Response): Promise<Response> {
    const r = await AppDataSource.getRepository(Teams).find({
      order: {
        name: 'ASC'
      }
    });
    return res.json(r);
  }

  async termolist(req: Request, res: Response): Promise<Response> {
    const termo: any = req.params.termo.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())
    const teamsRepository = AppDataSource.getRepository(Teams)
      .createQueryBuilder("time")
      .where("time.name like :name", { name: `%${termo}%` })
      .getMany()
    return res.json((await teamsRepository))

  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const create = req.body
      const team = AppDataSource.getRepository(Teams)
      const obj = await team.findOneBy({ id: create.id })

      obj.name = create.name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());

      const all = await team.save(obj)
      return res.json(all)

    } catch (err) {
      return res.json({ error: "O nome já existe" })
    }

  }

}

export default new TeamsController();