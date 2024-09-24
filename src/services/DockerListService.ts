import docker from "../config/DockerConfig";

class DockerListService {
  async execute() {
    return await docker.listContainers({ all: true });
  }
}

export default DockerListService;