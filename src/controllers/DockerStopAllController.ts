import { Request, Response } from 'express';
import DockerStopAllService from "../services/DockerStopAllService";

class DockerStopAllController {
  constructor(private dockerStopAllService: DockerStopAllService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const containers = await this.dockerStopAllService.execute();
      return res.status(containers.stopped.length > 0 ? 200 : 409).json({ message: `Container(s) parado(s): ${containers.stopped.length} - Container(s) que já estava(m) parado(s): ${containers.alreadyStopped.length}`, success: true });
    } catch (err) {
      return res.status(400).json({ message: `Falha ao parar todos os containers - ${err}`, success: false });
    }
  }
}

export default DockerStopAllController;