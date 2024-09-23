import { Router } from 'express';
import dockerRouter from '../../routes/DockerRouter';

const routes = Router();

routes.use('/docker', dockerRouter);

export default routes;
