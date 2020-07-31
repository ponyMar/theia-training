import { WidgetOpenHandler } from "@theia/core/lib/browser";
import { JsonschemaFormWidget, JsonschemaFormWidgetOptions } from "./jsonschema-form-widget";
import URI from "@theia/core/lib/common/uri";
import { injectable, inject } from "inversify";
import { EditorManager } from "@theia/editor/lib/browser";
import { JsonschemaFormPreferences } from "./jsonschema-form-preferences";

@injectable()
export class JsonschemaFormOpenHandler extends WidgetOpenHandler<JsonschemaFormWidget> {
    
    readonly id = JsonschemaFormWidget.id;
    readonly label = "Form";

    @inject(EditorManager)
    protected readonly editorManager: EditorManager;

    @inject(JsonschemaFormPreferences)
    protected readonly preferences: JsonschemaFormPreferences;

    canHandle(uri: URI): number {
        if (uri.path.ext !== '.json' && uri.path.ext !== '.xml') {
            return 0;
        }
        if (uri.path.name.endsWith(this.preferences["jsonschema-form.dataSuffix"]) || uri.path.ext == '.xml') {
            return this.editorManager.canHandle(uri) * 2;    
        }
        return this.editorManager.canHandle(uri) / 2;
    }

    protected createWidgetOptions(uri: URI): JsonschemaFormWidgetOptions {
        return { uri: uri.withoutFragment().toString() };
    }
    
}