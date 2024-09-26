import { Request, Response } from 'express';
import DockerStartAllService from "../services/DockerStartAllService";

class DockerStartAllController {
  constructor(private dockerStartAllService: DockerStartAllService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const containers = await this.dockerStartAllService.execute();
      return res.status(200).json({ message: `Containers iniciados: ${containers.started.length} - Containers que já estavam em execução: ${containers.alreadyStarted.length}`, success: true });
    } catch (err) {
      return res.status(400).json({ message: `Falha ao iniciar todos os containers - ${err}`, success: false });
    }
  }
}

export default DockerStartAllController;