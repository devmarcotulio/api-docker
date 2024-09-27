import { Request, Response } from 'express';
import DockerStartAllService from "../services/DockerStartAllService";

class DockerStartAllController {
  constructor(private dockerStartAllService: DockerStartAllService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const containers = await this.dockerStartAllService.execute();
      return res.status(containers.started.length > 0 ? 200 : 409).json({ message: `Container(s) iniciado(s): ${containers.started.length} - Container(s) que já estava(m) em execução: ${containers.alreadyStarted.length}`, success: true });
    } catch (err) {
      return res.status(400).json({ message: `Falha ao iniciar todos os containers - ${err}`, success: false });
    }
  }
}

export default DockerStartAllController;