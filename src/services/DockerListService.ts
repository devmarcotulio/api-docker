import docker from "../config/DockerConfig";
import { ContainerInfo } from 'dockerode';

class DockerListService {
  async execute(): Promise<ContainerInfo[]> {
    return await docker.listContainers({ all: true });
  }
}

export default DockerListService;