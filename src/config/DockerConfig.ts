import Docker from 'dockerode';

const docker = new Docker({
  host: process.env.DOCKER_HOST, port: process.env.DOCKER_PORT
});

export default docker;