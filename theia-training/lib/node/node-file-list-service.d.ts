import { FileListService, Files } from "../common/file-list-protocol";
import { MessageService } from '@theia/core';
export declare class NodeFileListService implements FileListService {
    protected readonly messageService: MessageService;
    getFiles(uri: string): Promise<Files>;
}
//# sourceMappingURL=node-file-list-service.d.ts.map