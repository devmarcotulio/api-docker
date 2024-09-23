import docker from "../config/DockerConfig";

class DockerListService {
  async execute() {
    try {
      return await docker.listContainers({ all: true });
    } catch (err) {
      throw err;
    }
  }
}

export default DockerListService;