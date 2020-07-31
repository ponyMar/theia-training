import '../../src/browser/style/index.css';

import { ContainerModule } from 'inversify';
import { TheiaTrainingFrontendContribution } from './theia-training-contribution';
import { TheiaTraining2FrontendContribution } from './theia-training2-contribution';
import { TheiaTraining3FrontendContribution } from './theia-training3-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { bindViewContribution, OpenHandler, WidgetFactory, KeybindingContribution, FrontendApplicationContribution, WebSocketConnectionProvider } from '@theia/core/lib/browser';
import { FileListWidget } from './file-list-widget';
import { FileListWidget3 } from './file-list-widget3';
import { FileListService, fileListPath } from '../common/file-list-protocol';
import { JsonschemaFormWidget, JsonschemaFormWidgetOptions } from './jsonschema-form-widget';
import { JsonschemaFormOpenHandler } from './jsonschema-form-open-handler';
import { bindJsonschemaFormPreferences } from "./jsonschema-form-preferences";

export default new ContainerModule(bind => {
    bind(TheiaTrainingFrontendContribution).toSelf().inSingletonScope();
    bind(CommandContribution).toService(TheiaTrainingFrontendContribution);
    bind(MenuContribution).toService(TheiaTrainingFrontendContribution);
    bind(KeybindingContribution).toService(TheiaTrainingFrontendContribution);
    bind(FrontendApplicationContribution).toService(TheiaTrainingFrontendContribution);

    bind(FileListWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: FileListWidget.ID,
        createWidget: () => context.container.get(FileListWidget)
    }));
    bindViewContribution(bind, TheiaTraining2FrontendContribution);
    bind(FrontendApplicationContribution).toService(TheiaTraining2FrontendContribution);

    bind(FileListWidget3).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: FileListWidget3.ID,
        createWidget: () => context.container.get(FileListWidget3)
    }));
    bindViewContribution(bind, TheiaTraining3FrontendContribution);
    bind(FrontendApplicationContribution).toService(TheiaTraining3FrontendContribution);
    bind(FileListService).toDynamicValue(ctx =>
        WebSocketConnectionProvider.createProxy(ctx.container, fileListPath)
    ).inSingletonScope();

    bind(OpenHandler).to(JsonschemaFormOpenHandler).inSingletonScope();
    bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: JsonschemaFormWidget.id,
        createWidget: (options: JsonschemaFormWidgetOptions) => {
            const child = container.createChild();
            child.bind(JsonschemaFormWidgetOptions).toConstantValue(options);
            child.bind(JsonschemaFormWidget).toSelf();
            return child.get(JsonschemaFormWidget);
        }
    }));
    bindJsonschemaFormPreferences(bind);
});