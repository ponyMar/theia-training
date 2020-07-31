import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { KeybindingContribution, KeybindingRegistry, FrontendApplicationContribution, QuickOpenService, StatusBar, QuickOpenContribution, QuickOpenHandlerRegistry, OpenerService } from "@theia/core/lib/browser";
import { WorkspaceService } from "@theia/workspace/lib/browser";
export declare class TheiaTrainingFrontendContribution implements CommandContribution, MenuContribution, KeybindingContribution, FrontendApplicationContribution, QuickOpenContribution {
    readonly prefix = "file";
    readonly description = "Quick File";
    protected readonly quickOpenService: QuickOpenService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly openereService: OpenerService;
    protected readonly statusBar: StatusBar;
    registerCommands(registry: CommandRegistry): void;
    registerKeybindings(registry: KeybindingRegistry): void;
    registerMenus(registry: MenuModelRegistry): void;
    onStart(): void;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
    protected open(current: string, path?: string[]): Promise<void>;
}
//# sourceMappingURL=theia-training-contribution.d.ts.map