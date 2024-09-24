import { Request, Response } from 'express';
import DockerStartService from '../services/DockerStartService';

class DockerStartController {
  constructor(private dockerStartService: DockerStartService) { }

  async handle(req: Request, res: Response): Promise<void> {
    const { containerId } = req.body;
    try {
      await this.dockerStartService.execute(containerId);
      res.status(200).json({ message: `Container ${containerId} iniciado com sucesso!`, success: true });
    } catch (err) {
      res.status(400).json({ message: `Falha ao iniciar o container ${containerId} - ${err}`, success: false });
    }
  }
}

export default DockerStartController;