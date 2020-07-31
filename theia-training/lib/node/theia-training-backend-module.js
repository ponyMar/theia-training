"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var node_file_list_service_1 = require("./node-file-list-service");
var connection_container_module_1 = require("@theia/core/lib/node/messaging/connection-container-module");
var file_list_protocol_1 = require("../common/file-list-protocol");
var fileListConnectionModule = connection_container_module_1.ConnectionContainerModule.create(function (_a) {
    var bind = _a.bind, bindBackendService = _a.bindBackendService;
    bind(node_file_list_service_1.NodeFileListService).toSelf().inSingletonScope();
    bindBackendService(file_list_protocol_1.fileListPath, node_file_list_service_1.NodeFileListService);
});
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(connection_container_module_1.ConnectionContainerModule).toConstantValue(fileListConnectionModule);
});
//# sourceMappingURL=theia-training-backend-module.js.map