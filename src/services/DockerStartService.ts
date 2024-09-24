import docker from "../config/DockerConfig";

class DockerStartService {
  async execute(containerId: string) {
    await docker.getContainer(containerId).start();
  }
}

export default DockerStartService;