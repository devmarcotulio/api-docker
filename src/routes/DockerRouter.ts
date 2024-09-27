import { Router } from 'express';
import { dockerListController, dockerStartAllController, dockerStartController, dockerStopAllController, dockerStopController } from '../config/DockerFactory';

const dockerRouter = Router();

dockerRouter.get('/', (req, res) => {
  dockerListController.handle(req, res);
});

dockerRouter.post('/start', (req, res) => {
  dockerStartController.handle(req, res);
})

dockerRouter.post('/stop', (req, res) => {
  dockerStopController.handle(req, res);
})

dockerRouter.post('/startAll', (req, res) => {
  dockerStartAllController.handle(req, res);
})

dockerRouter.post('/stopAll', (req, res) => {
  dockerStopAllController.handle(req, res);
})

export default dockerRouter;