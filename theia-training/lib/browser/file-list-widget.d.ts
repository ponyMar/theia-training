import * as React from 'react';
import { ReactWidget, LabelProvider, Message, OpenerService } from "@theia/core/lib/browser";
import { FileSystem, FileStat } from "@theia/filesystem/lib/common";
export declare class FileListWidget extends ReactWidget {
    static ID: string;
    protected readonly fileSystem: FileSystem;
    protected readonly labelProvider: LabelProvider;
    protected readonly openerService: OpenerService;
    constructor();
    protected onActivateRequest(msg: Message): void;
    protected path: string[];
    protected current: FileStat | undefined;
    protected render(): React.ReactNode;
    protected readonly openParent: (e: React.MouseEvent<HTMLDivElement>) => void;
    protected readonly openChild: (uri: string) => void;
    get file(): FileStat | undefined;
    set file(stat: FileStat | undefined);
    protected readonly doOpen: (uri: string) => Promise<void>;
}
export declare class FileComponent extends React.Component<FileComponent.Props> {
    render(): React.ReactNode;
    protected readonly openFile: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare namespace FileComponent {
    interface Props {
        file: FileStat;
        labelProvider: LabelProvider;
        onOpenFile: (uri: string) => void;
    }
}
//# sourceMappingURL=file-list-widget.d.ts.map