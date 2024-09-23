import docker from "../config/DockerConfig";

class DockerStartService {
  async execute(containerId: string) {
    try {
      await docker.getContainer(containerId).start();
    } catch (err) {
      throw err;
    }
  }
}

export default DockerStartService;