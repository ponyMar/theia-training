import { injectable, inject } from "inversify";
import { AbstractViewContribution, OpenViewArguments, FrontendApplicationContribution} from "@theia/core/lib/browser";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { FileListWidget3 } from "./file-list-widget3";

@injectable()
export class TheiaTraining3FrontendContribution extends AbstractViewContribution<FileListWidget3> implements FrontendApplicationContribution {

    @inject(WorkspaceService)
    protected readonly workspaceService: WorkspaceService;

    constructor() {
        console.log('construct');
        super({
            widgetId: FileListWidget3.ID,
            widgetName: 'File3 List',
            defaultWidgetOptions: {
                area: 'left',
                rank: 100
            },
            toggleCommandId: 'fileList3:toggle',
            toggleKeybinding: 'ctrlcmd+q'
        });
    }

    async openView(args: Partial<OpenViewArguments> = {}): Promise<FileListWidget3> {
        const widget = await super.openView(args);
        if (!widget.file) {
            const roots = await this.workspaceService.roots;
            if (roots.length) {
                widget.file = roots[0].uri;
                console.log('file' + widget.file + ' uri:' + roots[0].uri);
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