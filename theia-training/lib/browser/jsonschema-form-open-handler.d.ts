import { WidgetOpenHandler } from "@theia/core/lib/browser";
import { JsonschemaFormWidget, JsonschemaFormWidgetOptions } from "./jsonschema-form-widget";
import URI from "@theia/core/lib/common/uri";
import { EditorManager } from "@theia/editor/lib/browser";
import { JsonschemaFormPreferences } from "./jsonschema-form-preferences";
export declare class JsonschemaFormOpenHandler extends WidgetOpenHandler<JsonschemaFormWidget> {
    readonly id: string;
    readonly label = "Form";
    protected readonly editorManager: EditorManager;
    protected readonly preferences: JsonschemaFormPreferences;
    canHandle(uri: URI): number;
    protected createWidgetOptions(uri: URI): JsonschemaFormWidgetOptions;
}
//# sourceMappingURL=jsonschema-form-open-handler.d.ts.map