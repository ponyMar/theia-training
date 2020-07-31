"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonschemaFormWidget = exports.JsonschemaFormWidgetOptions = void 0;
var React = require("react");
var ReactDOM = require("react-dom");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var monaco_text_model_service_1 = require("@theia/monaco/lib/browser/monaco-text-model-service");
var core_1 = require("@theia/core");
var jsonschema_form_view_1 = require("./jsonschema-form-view");
exports.JsonschemaFormWidgetOptions = Symbol('JsonschemaFormWidgetOptions');
var JsonschemaFormWidget = /** @class */ (function (_super) {
    __extends(JsonschemaFormWidget, _super);
    function JsonschemaFormWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonschemaFormWidget_1 = JsonschemaFormWidget;
    JsonschemaFormWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, reference;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.options.uri;
                        this.id = JsonschemaFormWidget_1.id + ':' + uri;
                        this.title.label = 'Form ' + new uri_1.default(uri).displayName;
                        this.title.closable = true;
                        this.scrollOptions = {};
                        this.viewNode = document.createElement('div');
                        this.viewNode.style.paddingLeft = '15px';
                        this.viewNode.style.paddingRight = '15px';
                        this.node.appendChild(this.viewNode);
                        this.toDispose.push(core_1.Disposable.create(function () { return ReactDOM.unmountComponentAtNode(_this.viewNode); }));
                        return [4 /*yield*/, this.modelService.createModelReference(new uri_1.default(uri))];
                    case 1:
                        reference = _a.sent();
                        if (this.toDispose.disposed) {
                            reference.dispose();
                            return [2 /*return*/];
                        }
                        this.toDispose.push(this.reference = reference);
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonschemaFormWidget.prototype.onUpdateRequest = function (message) {
        _super.prototype.onUpdateRequest.call(this, message);
        var model = this.reference && this.reference.object;
        console.log('model is ' + model.getText());
        var xml2js = require('xml2js');
        var xmlParser = new xml2js.Parser({ explicitArray: false, ignoreAttrs: true });
        if (model.uri.slice(-4) == '.xml') {
            // xml -> json
            var node = this.viewNode;
            xmlParser.parseString(model.getText(), function (err, result) {
                //将返回的结果再次格式化
                console.log(JSON.stringify(result));
                function map(object) {
                    return Object.keys(object).map(function (k) {
                        return (typeof (object[k]) != 'object' ?
                            React.createElement("li", { key: k },
                                React.createElement("div", null,
                                    k,
                                    " is : "),
                                React.createElement("input", { defaultValue: object[k], readOnly: false, onChange: function () { } }))
                            : map(object[k]));
                    });
                }
                var element = map(result);
                ReactDOM.render(element, node);
            });
        }
        else {
            ReactDOM.render(model ? React.createElement(jsonschema_form_view_1.JsonschemaFormView, { model: model, modelService: this.modelService }) : null, this.viewNode);
        }
    };
    var JsonschemaFormWidget_1;
    JsonschemaFormWidget.id = 'jsonschema-form-widget';
    __decorate([
        inversify_1.inject(exports.JsonschemaFormWidgetOptions),
        __metadata("design:type", Object)
    ], JsonschemaFormWidget.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], JsonschemaFormWidget.prototype, "modelService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JsonschemaFormWidget.prototype, "init", null);
    JsonschemaFormWidget = JsonschemaFormWidget_1 = __decorate([
        inversify_1.injectable()
    ], JsonschemaFormWidget);
    return JsonschemaFormWidget;
}(browser_1.BaseWidget));
exports.JsonschemaFormWidget = JsonschemaFormWidget;
//# sourceMappingURL=jsonschema-form-widget.js.map