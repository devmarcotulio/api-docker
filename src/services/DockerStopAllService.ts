import DockerListService from "./DockerListService";
import DockerStopService from "./DockerStopService";

interface IDockerStopAllResponse {
  stopped: string[],
  alreadyStopped: string[]
}

class DockerStopAllService {
  constructor(private dockerListService: DockerListService, private dockerStopService: DockerStopService) { }

  async execute(): Promise<IDockerStopAllResponse> {
    const containers = await this.dockerListService.execute();
    const stoppedContainers = containers.filter(item => item.State != 'running');
    const runningContainers = containers.filter(item => item.State == 'running');
    if (runningContainers.length == 0) {
      return {
        stopped: [],
        alreadyStopped: stoppedContainers.map(item => item.Id)
      }
    }
    await Promise.all(runningContainers.map(item => this.dockerStopService.execute(item.Id)));
    return {
      stopped: runningContainers.map(item => item.Id),
      alreadyStopped: stoppedContainers.map(item => item.Id)
    }
  }
}

export default DockerStopAllService;