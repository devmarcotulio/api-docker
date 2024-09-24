import { Request, Response } from 'express';
import DockerStopService from "../services/DockerStopService";

class DockerStopController {
  constructor(private dockerStopService: DockerStopService) { }

  async handle(req: Request, res: Response): Promise<void> {
    const { containerId } = req.body;
    try {
      await this.dockerStopService.execute(containerId);
      res.status(200).json({ message: `Container ${containerId} parado com sucesso!`, success: true });
    } catch (err) {
      res.status(400).json({ message: `Falha ao parar o container ${containerId} - ${err}`, success: false });
    }
  }
}

export default DockerStopController;