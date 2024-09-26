import docker from "../config/DockerConfig";

class DockerStopService {
  async execute(containerId: string) {
    const container = docker.getContainer(containerId);
    const infoContainer = await container.inspect();
    if (!infoContainer.State.Running) {
      return {
        message: `O container ${containerId} não está em execução.`,
        success: false
      }
    }
    await container.stop();
    return {
      message: `Container ${containerId} parado com sucesso.`,
      success: true
    }
  }
}

export default DockerStopService;