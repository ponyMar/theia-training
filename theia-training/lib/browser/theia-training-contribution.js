"use strict";
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
exports.TheiaTrainingFrontendContribution = void 0;
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/workspace/lib/browser");
var TheiaTrainingFrontendContribution = /** @class */ (function () {
    function TheiaTrainingFrontendContribution() {
        this.prefix = 'file';
        this.description = 'Quick File';
    }
    TheiaTrainingFrontendContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand({
            id: 'training.quickFile.open',
            label: 'Open Quick File'
        }, {
            execute: function () {
                var root = _this.workspaceService.tryGetRoots()[0];
                if (root) {
                    _this.open(root.uri);
                }
            },
            isEnabled: function () { return _this.workspaceService.tryGetRoots().length > 0; },
            isVisible: function () { return _this.workspaceService.tryGetRoots().length > 0; }
        });
    };
    TheiaTrainingFrontendContribution.prototype.registerKeybindings = function (registry) {
        registry.registerKeybinding({
            command: 'training.quickFile.open',
            keybinding: 'ctrlcmd+k f'
        });
    };
    TheiaTrainingFrontendContribution.prototype.registerMenus = function (registry) {
        registry.registerMenuAction(browser_1.CommonMenus.FILE_OPEN, {
            commandId: 'training.quickFile.open'
        });
    };
    TheiaTrainingFrontendContribution.prototype.onStart = function () {
        this.statusBar.setElement('training.quickFile', {
            text: '$(file)',
            alignment: browser_1.StatusBarAlignment.LEFT,
            priority: 1,
            command: 'training.quickFile.open'
        });
    };
    TheiaTrainingFrontendContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        /* BONUS: reimplement like QuickOpenHandler */
        // handlers.registerHandler(this);
    };
    TheiaTrainingFrontendContribution.prototype.open = function (current, path) {
        if (path === void 0) { path = []; }
        return __awaiter(this, void 0, void 0, function () {
            var listFilesUrl, url, response, files, items;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listFilesUrl = new browser_1.Endpoint({ path: 'listFiles' }).getRestUrl();
                        url = listFilesUrl.withQuery(current).toString();
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        files = _a.sent();
                        items = files.map(function (file) { return new browser_1.QuickOpenItem({
                            label: file,
                            run: function (mode) {
                                if (mode === browser_1.QuickOpenMode.OPEN) {
                                    var currentUri = new uri_1.default(current);
                                    var fileUri = currentUri.withPath(currentUri.path.join(file));
                                    if (fileUri.path.ext && fileUri.path.name) {
                                        browser_1.open(_this.openereService, fileUri);
                                    }
                                    else {
                                        path.push(current);
                                        _this.open(fileUri.toString(true), path);
                                    }
                                    return true;
                                }
                                return false;
                            }
                        }); });
                        if (path.length) {
                            items.unshift(new browser_1.QuickOpenItem({
                                label: '..',
                                run: function (mode) {
                                    if (mode === browser_1.QuickOpenMode.OPEN) {
                                        _this.open(path.pop(), path);
                                        return true;
                                    }
                                    return false;
                                }
                            }));
                        }
                        this.quickOpenService.open({
                            onType: function (_, acceptor) { return acceptor(items); }
                        }, {
                            fuzzyMatchLabel: true,
                            placeholder: 'Type file name...'
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], TheiaTrainingFrontendContribution.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TheiaTrainingFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], TheiaTrainingFrontendContribution.prototype, "openereService", void 0);
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], TheiaTrainingFrontendContribution.prototype, "statusBar", void 0);
    TheiaTrainingFrontendContribution = __decorate([
        inversify_1.injectable()
    ], TheiaTrainingFrontendContribution);
    return TheiaTrainingFrontendContribution;
}());
exports.TheiaTrainingFrontendContribution = TheiaTrainingFrontendContribution;
//# sourceMappingURL=theia-training-contribution.js.map