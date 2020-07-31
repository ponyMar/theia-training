import { AbstractViewContribution, OpenViewArguments, FrontendApplicationContribution } from "@theia/core/lib/browser";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { FileListWidget } from "./file-list-widget";
export declare class TheiaTraining2FrontendContribution extends AbstractViewContribution<FileListWidget> implements FrontendApplicationContribution {
    protected readonly workspaceService: WorkspaceService;
    constructor();
    openView(args?: Partial<OpenViewArguments>): Promise<FileListWidget>;
    initializeLayout(): Promise<void>;
}
//# sourceMappingURL=theia-training2-contribution.d.ts.map