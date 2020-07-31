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
exports.FileComponent = exports.FileListWidget = void 0;
var React = require("react");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/filesystem/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var FileListWidget = /** @class */ (function (_super) {
    __extends(FileListWidget, _super);
    function FileListWidget() {
        var _this = _super.call(this) || this;
        _this.path = [];
        _this.openParent = function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this.doOpen(_this.path.pop());
        };
        _this.openChild = function (uri) {
            _this.path.push(_this.current.uri);
            _this.doOpen(uri);
        };
        _this.doOpen = function (uri) { return __awaiter(_this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.getFileStat(uri)];
                    case 1:
                        file = _a.sent();
                        if (!file) {
                            return [2 /*return*/];
                        }
                        if (file.isDirectory) {
                            this.current = file;
                            this.update();
                        }
                        else {
                            browser_1.open(this.openerService, new uri_1.default(file.uri));
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.id = FileListWidget_1.ID;
        _this.title.label = 'File List';
        _this.title.caption = 'File List';
        _this.title.iconClass = 'fa fa-file';
        _this.node.tabIndex = 0;
        _this.node.classList.add('theia-file-list');
        return _this;
    }
    FileListWidget_1 = FileListWidget;
    FileListWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
    };
    FileListWidget.prototype.render = function () {
        var _this = this;
        var children = this.current && this.current.children;
        return React.createElement(React.Fragment, null,
            this.path.length > 0 && React.createElement("div", { onClick: this.openParent }, ".."),
            children && children.map(function (file, index) { return React.createElement(FileComponent, { key: index, file: file, labelProvider: _this.labelProvider, onOpenFile: _this.openChild }); }));
    };
    Object.defineProperty(FileListWidget.prototype, "file", {
        get: function () {
            return this.current;
        },
        set: function (stat) {
            this.path.length = 0;
            this.current = undefined;
            if (stat) {
                this.doOpen(stat.uri);
            }
            else {
                this.update();
            }
        },
        enumerable: false,
        configurable: true
    });
    var FileListWidget_1;
    FileListWidget.ID = 'fileList';
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], FileListWidget.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], FileListWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], FileListWidget.prototype, "openerService", void 0);
    FileListWidget = FileListWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], FileListWidget);
    return FileListWidget;
}(browser_1.ReactWidget));
exports.FileListWidget = FileListWidget;
var FileComponent = /** @class */ (function (_super) {
    __extends(FileComponent, _super);
    function FileComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openFile = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.props.onOpenFile(_this.props.file.uri);
        };
        return _this;
    }
    FileComponent.prototype.render = function () {
        var icon = this.props.labelProvider.getIcon(this.props.file);
        var style = { display: 'block' };
        return React.createElement("div", { style: style, className: icon, onClick: this.openFile }, this.props.labelProvider.getName(this.props.file));
    };
    return FileComponent;
}(React.Component));
exports.FileComponent = FileComponent;
//# sourceMappingURL=file-list-widget.js.map