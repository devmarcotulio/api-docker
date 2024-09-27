import DockerListController from "../controllers/DockerListController";
import DockerStartAllController from "../controllers/DockerStartAllController";
import DockerStartController from "../controllers/DockerStartController";
import DockerStopAllController from "../controllers/DockerStopAllController";
import DockerStopController from "../controllers/DockerStopController";
import DockerListService from "../services/DockerListService";
import DockerStartAllService from "../services/DockerStartAllService";
import DockerStartService from "../services/DockerStartService";
import DockerStopAllService from "../services/DockerStopAllService";
import DockerStopService from "../services/DockerStopService";

const dockerListService = new DockerListService();
const dockerListController = new DockerListController(dockerListService);

const dockerStartService = new DockerStartService();
const dockerStartController = new DockerStartController(dockerStartService);

const dockerStopService = new DockerStopService();
const dockerStopController = new DockerStopController(dockerStopService);

const dockerStartAllService = new DockerStartAllService(dockerListService, dockerStartService);
const dockerStartAllController = new DockerStartAllController(dockerStartAllService);

const dockerStopAllService = new DockerStopAllService(dockerListService, dockerStopService);
const dockerStopAllController = new DockerStopAllController(dockerStopAllService);

export {
  dockerListController,
  dockerStartController,
  dockerStopController,
  dockerStartAllController,
  dockerStopAllController
};