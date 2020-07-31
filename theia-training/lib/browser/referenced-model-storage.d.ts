import URI from "@theia/core/lib/common/uri";
import { MonacoTextModelService } from "@theia/monaco/lib/browser/monaco-text-model-service";
import { MonacoEditorModel } from "@theia/monaco/lib/browser/monaco-editor-model";
import { DisposableCollection, Emitter, Disposable } from "@theia/core";
import { JSONValue } from "@phosphor/coreutils";
export declare class ReferencedModelStorage<T> implements Disposable {
    readonly model: MonacoEditorModel;
    readonly modelService: MonacoTextModelService;
    readonly formDataProperty: string;
    readonly defaultValue: T;
    protected referencedModel: MonacoEditorModel | undefined;
    protected readonly toDispose: DisposableCollection;
    protected readonly onDidChangeEmitter: Emitter<T>;
    readonly onDidChange: import("@theia/core").Event<T>;
    constructor(model: MonacoEditorModel, modelService: MonacoTextModelService, formDataProperty: string, defaultValue: T);
    dispose(): void;
    update(formData: JSONValue): Promise<void>;
    protected reconcile(): void;
    protected resolveUri(formData: JSONValue): URI | undefined;
}
//# sourceMappingURL=referenced-model-storage.d.ts.map