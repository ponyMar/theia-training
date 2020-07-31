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
exports.FileListWidget3 = exports.FileComponent = void 0;
var React = require("react");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var file_list_protocol_1 = require("../common/file-list-protocol");
var FileComponent = /** @class */ (function (_super) {
    __extends(FileComponent, _super);
    function FileComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openFile = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.props.onOpenFile(_this.props.uri);
        };
        return _this;
    }
    FileComponent.prototype.render = function () {
        var icon = this.props.labelProvider.getIcon(new uri_1.default(this.props.uri));
        var style = { display: 'block' };
        return React.createElement("div", { style: style, className: icon, onClick: this.openFile }, this.props.labelProvider.getName(new uri_1.default(this.props.uri)));
    };
    return FileComponent;
}(React.Component));
exports.FileComponent = FileComponent;
var FileListWidget3 = /** @class */ (function (_super) {
    __extends(FileListWidget3, _super);
    function FileListWidget3() {
        var _this = _super.call(this) || this;
        _this.online = true;
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
            var files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('openuri' + uri);
                        return [4 /*yield*/, this.fileListService.getFiles(uri)];
                    case 1:
                        files = _a.sent();
                        if (files.isDirectory) {
                            this.current = Object.assign(files, { uri: uri });
                            this.update();
                        }
                        else {
                            browser_1.open(this.openerService, new uri_1.default(uri));
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.id = FileListWidget3_1.ID;
        _this.title.label = 'File List';
        _this.title.caption = 'File List';
        _this.title.iconClass = 'fa fa-file';
        _this.node.tabIndex = 1;
        _this.node.classList.add('theia-file-list');
        return _this;
    }
    FileListWidget3_1 = FileListWidget3;
    FileListWidget3.prototype.init = function () {
        var _this = this;
        this.fileListService.onDidCloseConnection(function () {
            _this.online = false;
            _this.update();
        });
        this.fileListService.onDidOpenConnection(function () {
            _this.online = true;
            _this.update();
        });
    };
    FileListWidget3.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
    };
    FileListWidget3.prototype.render = function () {
        var _this = this;
        if (!this.online) {
            return React.createElement("div", null, "Offline");
        }
        var children = this.current && this.current.children;
        return React.createElement(React.Fragment, null,
            this.path.length > 0 && React.createElement("div", { onClick: this.openParent }, ".."),
            children && children.map(function (uri, index) { return React.createElement(FileComponent, { key: index, uri: uri, labelProvider: _this.labelProvider, onOpenFile: _this.openChild }); }));
    };
    Object.defineProperty(FileListWidget3.prototype, "file", {
        get: function () {
            return this.current && this.current.uri;
        },
        set: function (uri) {
            console.log('seturi' + uri);
            this.path.length = 0;
            this.current = undefined;
            if (uri) {
                this.doOpen(uri);
            }
            else {
                this.update();
            }
        },
        enumerable: false,
        configurable: true
    });
    FileListWidget3.prototype.storeState = function () {
        return {
            path: this.path,
            current: this.current
        };
    };
    FileListWidget3.prototype.restoreState = function (oldState) {
        Object.assign(this, oldState);
        this.update();
    };
    var FileListWidget3_1;
    FileListWidget3.ID = 'fileList3';
    __decorate([
        inversify_1.inject(file_list_protocol_1.FileListService),
        __metadata("design:type", Object)
    ], FileListWidget3.prototype, "fileListService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], FileListWidget3.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], FileListWidget3.prototype, "openerService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileListWidget3.prototype, "init", null);
    FileListWidget3 = FileListWidget3_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], FileListWidget3);
    return FileListWidget3;
}(browser_1.ReactWidget));
exports.FileListWidget3 = FileListWidget3;
//# sourceMappingURL=file-list-widget3.js.map