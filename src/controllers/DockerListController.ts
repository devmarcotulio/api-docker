import { Request, Response } from 'express';
import DockerListService from "../services/DockerListService";

class DockerListController {
  constructor(private dockerListService: DockerListService) { }

  async handle(req: Request, res: Response): Promise<void> {
    await this.dockerListService.execute()
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json({ message: `Falha ao listar containers - ${err}`, success: false }))
  }
}

export default DockerListController;