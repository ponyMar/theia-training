"use strict";
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
exports.ReferencedModelStorage = void 0;
var uri_1 = require("@theia/core/lib/common/uri");
var jsoncparser = require("jsonc-parser");
var core_1 = require("@theia/core");
var coreutils_1 = require("@phosphor/coreutils");
var ReferencedModelStorage = /** @class */ (function () {
    function ReferencedModelStorage(model, modelService, formDataProperty, defaultValue) {
        this.model = model;
        this.modelService = modelService;
        this.formDataProperty = formDataProperty;
        this.defaultValue = defaultValue;
        this.toDispose = new core_1.DisposableCollection();
        this.onDidChangeEmitter = new core_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.referencedModel = model;
    }
    ReferencedModelStorage.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    ReferencedModelStorage.prototype.update = function (formData) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, reference;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.resolveUri(formData);
                        if (!uri) {
                            this.dispose();
                            this.reconcile();
                            return [2 /*return*/];
                        }
                        if (this.referencedModel && this.referencedModel.uri.toString() === uri.toString()) {
                            return [2 /*return*/];
                        }
                        this.toDispose.dispose();
                        return [4 /*yield*/, this.modelService.createModelReference(uri)];
                    case 1:
                        reference = _a.sent();
                        this.toDispose.push(reference);
                        this.referencedModel = reference.object;
                        this.toDispose.push(core_1.Disposable.create(function () { return _this.referencedModel = undefined; }));
                        this.toDispose.push(this.referencedModel.onDidChangeContent(function () { return _this.reconcile(); }));
                        this.reconcile();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReferencedModelStorage.prototype.reconcile = function () {
        if (this.referencedModel) {
            var schema = jsoncparser.parse(jsoncparser.stripComments(this.referencedModel.getText())) || {};
            this.onDidChangeEmitter.fire(schema);
        }
        else {
            this.onDidChangeEmitter.fire(this.defaultValue);
        }
    };
    ReferencedModelStorage.prototype.resolveUri = function (formData) {
        if (!coreutils_1.JSONExt.isObject(formData)) {
            return undefined;
        }
        var value = formData[this.formDataProperty];
        if (typeof value !== 'string') {
            return undefined;
        }
        var uri = new uri_1.default(value);
        var path = new core_1.Path(value);
        return uri.scheme !== 'file' || path.isAbsolute ? uri : new uri_1.default(this.model.uri.toString()).parent.resolve(path);
    };
    return ReferencedModelStorage;
}());
exports.ReferencedModelStorage = ReferencedModelStorage;
//# sourceMappingURL=referenced-model-storage.js.map