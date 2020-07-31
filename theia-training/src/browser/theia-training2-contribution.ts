import { injectable, inject } from "inversify";
import { AbstractViewContribution, OpenViewArguments, FrontendApplicationContribution} from "@theia/core/lib/browser";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { FileListWidget } from "./file-list-widget";

@injectable()
export class TheiaTraining2FrontendContribution extends AbstractViewContribution<FileListWidget> implements FrontendApplicationContribution {

    @inject(WorkspaceService)
    protected readonly workspaceService: WorkspaceService;

    constructor() {
        console.log('construct');
        super({
            widgetId: FileListWidget.ID,
            widgetName: 'File List',
            defaultWidgetOptions: {
                area: 'left',
                rank: 100
            },
            toggleCommandId: 'fileList:toggle',
            toggleKeybinding: 'ctrlcmd+e'
        });
    }

    async openView(args: Partial<OpenViewArguments> = {}): Promise<FileListWidget> {
        console.log('args' + args);
        const widget = await super.openView(args);
        if (!widget.file) {
            const roots = await this.workspaceService.roots;
            if (roots.length) {
                widget.file = roots[0];
            }
        }
        return widget;
    }

    async initializeLayout(): Promise<void> {
        console.log('init');
        await this.openView({
            reveal: true
        });
    }
}