import express from 'express';
import routes from './routes/routes';
import http from 'http';
import { Server } from 'socket.io';
import WebSocketService from '../services/websocket/WebSocketService';

const app = express();
const httpServer = http.createServer(app);
const ws = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const webSocketService = new WebSocketService(ws);
webSocketService.initialize();

app.use(express.json());
app.use(routes);

httpServer.listen(3000, () => {
  console.log('Server running on port 3000');
})