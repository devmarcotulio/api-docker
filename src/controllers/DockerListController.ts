import { Request, Response } from 'express';
import DockerListService from "../services/DockerListService";

class DockerListController {
  constructor(private dockerListService: DockerListService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const containers = await this.dockerListService.execute();
      return res.status(200).json(containers);
    } catch (err) {
      return res.status(400).json({ message: `Falha ao listar containers - ${err}`, success: false });
    }
  }
}

export default DockerListController;