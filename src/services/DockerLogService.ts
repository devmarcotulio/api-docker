import docker from "../config/DockerConfig";

class DockerLogService {
  async execute(containerId: string) {
    const container = docker.getContainer(containerId);

    const logStream = await container.logs({
      follow: true,
      stdout: true,
      stderr: true,
      timestamps: true
    });

    return logStream;
  }
}

export default DockerLogService;
