import * as React from 'react';
import { ReactWidget, LabelProvider, Message, OpenerService, StatefulWidget } from "@theia/core/lib/browser";
import { FileListService, Files } from '../common/file-list-protocol';
import { JsonRpcProxy } from '@theia/core';
export declare class FileComponent extends React.Component<FileComponent.Props> {
    render(): React.ReactNode;
    protected readonly openFile: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare namespace FileComponent {
    interface Props {
        uri: string;
        labelProvider: LabelProvider;
        onOpenFile: (uri: string) => void;
    }
}
export declare class FileListWidget3 extends ReactWidget implements StatefulWidget {
    static ID: string;
    protected readonly fileListService: JsonRpcProxy<FileListService>;
    protected readonly labelProvider: LabelProvider;
    protected readonly openerService: OpenerService;
    constructor();
    protected online: boolean;
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    protected path: string[];
    protected current: Files & {
        uri: string;
    } | undefined;
    protected render(): React.ReactNode;
    protected readonly openParent: (e: React.MouseEvent<HTMLDivElement>) => void;
    protected readonly openChild: (uri: string) => void;
    get file(): string | undefined;
    set file(uri: string | undefined);
    protected readonly doOpen: (uri: string) => Promise<void>;
    storeState(): object;
    restoreState(oldState: object): void;
}
//# sourceMappingURL=file-list-widget3.d.ts.map