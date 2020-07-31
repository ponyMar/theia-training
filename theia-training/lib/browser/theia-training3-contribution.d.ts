import { AbstractViewContribution, OpenViewArguments, FrontendApplicationContribution } from "@theia/core/lib/browser";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { FileListWidget3 } from "./file-list-widget3";
export declare class TheiaTraining3FrontendContribution extends AbstractViewContribution<FileListWidget3> implements FrontendApplicationContribution {
    protected readonly workspaceService: WorkspaceService;
    constructor();
    openView(args?: Partial<OpenViewArguments>): Promise<FileListWidget3>;
    initializeLayout(): Promise<void>;
}
//# sourceMappingURL=theia-training3-contribution.d.ts.map