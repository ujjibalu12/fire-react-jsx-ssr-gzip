import * as compression from 'compression'
import GlobalPlugin from 'firejsx/plugins/GlobalPlugin'

export default class extends GlobalPlugin {
    constructor() {
        super();
    }

    initServer(server) {
        server.use(compression());
    }
}