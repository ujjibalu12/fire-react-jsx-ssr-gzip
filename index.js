"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compression = require("compression");
const GlobalPlugin_1 = require("firejsx/plugins/GlobalPlugin");
class default_1 extends GlobalPlugin_1.default {
    constructor() {
        super();
    }
    initServer(server) {
        server.use(compression());
    }
}
exports.default = default_1;
