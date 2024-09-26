import { Request, Response } from 'express';
import DockerStopService from "../services/DockerStopService";

class DockerStopController {
  constructor(private dockerStopService: DockerStopService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { containerId } = req.body;
    try {
      const result = await this.dockerStopService.execute(containerId);
      return res.status(result.success ? 200 : 409).json(result);
    } catch (err) {
      return res.status(400).json({ message: `Falha ao parar o container ${containerId} - ${err}`, success: false });
    }
  }
}

export default DockerStopController;