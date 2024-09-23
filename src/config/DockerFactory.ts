import DockerListController from "../controllers/DockerListController";
import DockerStartController from "../controllers/DockerStartController";
import DockerStopController from "../controllers/DockerStopController";
import DockerListService from "../services/DockerListService";
import DockerStartService from "../services/DockerStartService";
import DockerStopService from "../services/DockerStopService";

const dockerListService = new DockerListService();
const dockerListController = new DockerListController(dockerListService);

const dockerStartService = new DockerStartService();
const dockerStartController = new DockerStartController(dockerStartService);

const dockerStopService = new DockerStopService();
const dockerStopController = new DockerStopController(dockerStopService);

export { dockerListController, dockerStartController, dockerStopController };