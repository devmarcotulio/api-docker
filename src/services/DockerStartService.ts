import docker from "../config/DockerConfig";

class DockerStartService {
  async execute(containerId: string) {
    const container = docker.getContainer(containerId);
    const infoContainer = await container.inspect();
    if (infoContainer.State.Running) {
      return {
        message: `O container ${containerId} já está em execução.`,
        success: false
      }
    }
    await container.start();
    return {
      message: `Container ${containerId} iniciado com sucesso.`,
      success: true
    }
  }
}

export default DockerStartService;