export interface Files {
    isDirectory: boolean;
    /** child uris */
    children?: string[];
}
export declare const fileListPath = "/services/fileList";
export declare const FileListService: unique symbol;
export interface FileListService {
    getFiles(uri: string): Promise<Files>;
}
//# sourceMappingURL=file-list-protocol.d.ts.map