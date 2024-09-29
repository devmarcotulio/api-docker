import { Server, Socket } from 'socket.io';
import { dockerLogController } from '../../config/DockerFactory';

class WebSocketService {
  constructor(private ws: Server) { }

  public initialize(): void {
    this.ws.on('connection', (socket: Socket) => {
      console.log(`Cliente ${socket.id} conectado`);

      socket.on('getContainerLogs', async (data) => {
        console.log(`Solicitando logs do container: ${data.containerId}`);
        await dockerLogController.handle(socket, data.containerId);
      });

      socket.on('disconnect', () => {
        console.log('Cliente desconectado');
      });
    });
  }
}

export default WebSocketService;
