import DockerListService from "./DockerListService";
import DockerStartService from "./DockerStartService";

interface IDockerStartAllResponse {
  started: string[],
  alreadyStarted: string[]
}

class DockerStartAllService {
  constructor(private dockerListService: DockerListService, private dockerStartService: DockerStartService) { }

  async execute(): Promise<IDockerStartAllResponse> {
    const containers = await this.dockerListService.execute();
    const stoppedContainers = containers.filter(item => item.State != 'running');
    const runningContainers = containers.filter(item => item.State == 'running');
    if (stoppedContainers.length == 0) {
      return {
        started: [],
        alreadyStarted: runningContainers.map(item => item.Id)
      }
    }
    await Promise.all(stoppedContainers.map(item => this.dockerStartService.execute(item.Id)));
    return {
      started: stoppedContainers.map(item => item.Id),
      alreadyStarted: runningContainers.map(item => item.Id)
    }
  }
}

export default DockerStartAllService;