import docker from "../config/DockerConfig";

class DockerStopService {
  async execute(containerId: string) {
    await docker.getContainer(containerId).stop();
  }
}

export default DockerStopService;