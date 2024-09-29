import { Socket } from "socket.io";
import DockerLogService from "../services/DockerLogService";

class DockerLogController {
  constructor(private dockerLogService: DockerLogService) { }

  async handle(socket: Socket, containerId: string): Promise<void> {
    try {
      const logStream = await this.dockerLogService.execute(containerId);

      logStream.on('data', (chunk) => {
        socket.emit('containerLogs', chunk.toString());
      });
      logStream.on('end', () => {
        socket.emit('containerLogsEnd', 'Log stream ended');
      });
      logStream.on('error', (err) => {
        socket.emit('error', err.message);
      });
    } catch (err) {
      socket.emit('error', err);
    }
  }
}

export default DockerLogController;