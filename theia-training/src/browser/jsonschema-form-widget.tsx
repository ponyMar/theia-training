import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectable, inject, postConstruct } from "inversify";
import { BaseWidget, Message } from "@theia/core/lib/browser";
import URI from "@theia/core/lib/common/uri";
import { MonacoTextModelService } from "@theia/monaco/lib/browser/monaco-text-model-service";
import { MonacoEditorModel } from "@theia/monaco/lib/browser/monaco-editor-model";
import { Disposable, Reference } from "@theia/core";
import { JsonschemaFormView } from "./jsonschema-form-view";

export const JsonschemaFormWidgetOptions = Symbol('JsonschemaFormWidgetOptions');
export interface JsonschemaFormWidgetOptions {
    uri: string
}

@injectable()
export class JsonschemaFormWidget extends BaseWidget {

    static id = 'jsonschema-form-widget';

    @inject(JsonschemaFormWidgetOptions)
    protected readonly options: JsonschemaFormWidgetOptions;

    @inject(MonacoTextModelService)
    protected readonly modelService: MonacoTextModelService;

    protected viewNode: HTMLDivElement;
    protected reference: Reference<MonacoEditorModel>;

    @postConstruct()
    protected async init(): Promise<void> {
        const { uri } = this.options;
        this.id = JsonschemaFormWidget.id + ':' + uri
        this.title.label = 'Form ' + new URI(uri).displayName;
        this.title.closable = true;

        this.scrollOptions = {};
        this.viewNode = document.createElement('div');
        this.viewNode.style.paddingLeft = '15px';
        this.viewNode.style.paddingRight = '15px';
        this.node.appendChild(this.viewNode);
        this.toDispose.push(Disposable.create(() => ReactDOM.unmountComponentAtNode(this.viewNode)));

        const reference = await this.modelService.createModelReference(new URI(uri));
        if (this.toDispose.disposed) {
            reference.dispose();
            return;
        }
        this.toDispose.push(this.reference = reference);
        this.update();
    }

    protected onUpdateRequest(message: Message): void {
        super.onUpdateRequest(message);
        const model = this.reference && this.reference.object;
        console.log('model is ' + model.getText());
        var xml2js = require('xml2js');
        const xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true});
        if (model.uri.slice(-4) == '.xml') {
            // xml -> json
            var node = this.viewNode;
            xmlParser.parseString(model.getText(), function (err: any, result: any) {
                //将返回的结果再次格式化
                console.log(JSON.stringify(result));
                function map(object: any) : any{
                    return Object.keys(object).map(k => {
                        return (
                            typeof(object[k]) != 'object' ?
                            <li key={k}>
                              <div>{k} is : </div>
                              <input defaultValue={object[k]} readOnly={false} onChange={() => {}}></input>
                            </li>
                            : map(object[k])
                        );
                    });
                }
                let element = map(result);
                ReactDOM.render(element, node);
            });
        } else {
            ReactDOM.render(model ? <JsonschemaFormView model={model} modelService={this.modelService} /> : null!, this.viewNode);
        }
    }

}

