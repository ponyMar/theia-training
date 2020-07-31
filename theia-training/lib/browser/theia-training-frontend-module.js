"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var theia_training_contribution_1 = require("./theia-training-contribution");
var theia_training2_contribution_1 = require("./theia-training2-contribution");
var theia_training3_contribution_1 = require("./theia-training3-contribution");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var file_list_widget_1 = require("./file-list-widget");
var file_list_widget3_1 = require("./file-list-widget3");
var file_list_protocol_1 = require("../common/file-list-protocol");
var jsonschema_form_widget_1 = require("./jsonschema-form-widget");
var jsonschema_form_open_handler_1 = require("./jsonschema-form-open-handler");
var jsonschema_form_preferences_1 = require("./jsonschema-form-preferences");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(theia_training_contribution_1.TheiaTrainingFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(theia_training_contribution_1.TheiaTrainingFrontendContribution);
    bind(common_1.MenuContribution).toService(theia_training_contribution_1.TheiaTrainingFrontendContribution);
    bind(browser_1.KeybindingContribution).toService(theia_training_contribution_1.TheiaTrainingFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(theia_training_contribution_1.TheiaTrainingFrontendContribution);
    bind(file_list_widget_1.FileListWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: file_list_widget_1.FileListWidget.ID,
        createWidget: function () { return context.container.get(file_list_widget_1.FileListWidget); }
    }); });
    browser_1.bindViewContribution(bind, theia_training2_contribution_1.TheiaTraining2FrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(theia_training2_contribution_1.TheiaTraining2FrontendContribution);
    bind(file_list_widget3_1.FileListWidget3).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: file_list_widget3_1.FileListWidget3.ID,
        createWidget: function () { return context.container.get(file_list_widget3_1.FileListWidget3); }
    }); });
    browser_1.bindViewContribution(bind, theia_training3_contribution_1.TheiaTraining3FrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(theia_training3_contribution_1.TheiaTraining3FrontendContribution);
    bind(file_list_protocol_1.FileListService).toDynamicValue(function (ctx) {
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, file_list_protocol_1.fileListPath);
    }).inSingletonScope();
    bind(browser_1.OpenHandler).to(jsonschema_form_open_handler_1.JsonschemaFormOpenHandler).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: jsonschema_form_widget_1.JsonschemaFormWidget.id,
            createWidget: function (options) {
                var child = container.createChild();
                child.bind(jsonschema_form_widget_1.JsonschemaFormWidgetOptions).toConstantValue(options);
                child.bind(jsonschema_form_widget_1.JsonschemaFormWidget).toSelf();
                return child.get(jsonschema_form_widget_1.JsonschemaFormWidget);
            }
        });
    });
    jsonschema_form_preferences_1.bindJsonschemaFormPreferences(bind);
});
//# sourceMappingURL=theia-training-frontend-module.js.map