import docker from "../config/DockerConfig";

class DockerStopService {
  async execute(containerId: string) {
    try {
      await docker.getContainer(containerId).stop();
    } catch (err) {
      throw err;
    }
  }
}

export default DockerStopService;