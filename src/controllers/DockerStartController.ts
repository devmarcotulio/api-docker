import { Request, Response } from 'express';
import DockerStartService from '../services/DockerStartService';

class DockerStartController {
  constructor(private dockerStartService: DockerStartService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { containerId } = req.body;
    try {
      const result = await this.dockerStartService.execute(containerId);
      return res.status(result.success ? 200 : 409).json(result);
    } catch (err) {
      return res.status(400).json({ message: `Falha ao iniciar o container ${containerId} - ${err}`, success: false });
    }
  }
}

export default DockerStartController;