import * as React from "react";
import { JSONSchema6 } from "json-schema";
import { IChangeEvent, UiSchema } from "react-jsonschema-form";
import { MonacoTextModelService } from "@theia/monaco/lib/browser/monaco-text-model-service";
import { MonacoEditorModel } from "@theia/monaco/lib/browser/monaco-editor-model";
import { DisposableCollection } from "@theia/core";
import { ReferencedModelStorage } from "./referenced-model-storage";
export declare class JsonschemaFormView extends React.Component<JsonschemaFormView.Props, JsonschemaFormView.State> {
    protected readonly schemaStorage: ReferencedModelStorage<JSONSchema6>;
    protected readonly uiSchemaStorage: ReferencedModelStorage<UiSchema>;
    constructor(props: JsonschemaFormView.Props);
    render(): JSX.Element | null;
    protected submit: (e: IChangeEvent<any>) => void;
    protected readonly toDispose: DisposableCollection;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    protected reconcileFormData(): Promise<void>;
}
export declare namespace JsonschemaFormView {
    interface Props {
        model: MonacoEditorModel;
        modelService: MonacoTextModelService;
    }
    interface State {
        schema: JSONSchema6;
        uiSchema: UiSchema;
        formData: any;
    }
}
//# sourceMappingURL=jsonschema-form-view.d.ts.map