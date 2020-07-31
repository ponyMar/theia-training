import { BaseWidget, Message } from "@theia/core/lib/browser";
import { MonacoTextModelService } from "@theia/monaco/lib/browser/monaco-text-model-service";
import { MonacoEditorModel } from "@theia/monaco/lib/browser/monaco-editor-model";
import { Reference } from "@theia/core";
export declare const JsonschemaFormWidgetOptions: unique symbol;
export interface JsonschemaFormWidgetOptions {
    uri: string;
}
export declare class JsonschemaFormWidget extends BaseWidget {
    static id: string;
    protected readonly options: JsonschemaFormWidgetOptions;
    protected readonly modelService: MonacoTextModelService;
    protected viewNode: HTMLDivElement;
    protected reference: Reference<MonacoEditorModel>;
    protected init(): Promise<void>;
    protected onUpdateRequest(message: Message): void;
}
//# sourceMappingURL=jsonschema-form-widget.d.ts.map