"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindJsonschemaFormPreferences = exports.createJsonschemaFormPreferences = exports.JsonschemaFormPreferences = exports.JsonschemaFormConigurationSchema = void 0;
var browser_1 = require("@theia/core/lib/browser");
exports.JsonschemaFormConigurationSchema = {
    'type': 'object',
    properties: {
        'jsonschema-form.dataSuffix': {
            type: 'string',
            description: 'Control when a JSON-Form widget should be opened',
            default: '-data'
        }
    }
};
exports.JsonschemaFormPreferences = Symbol('JsonschemaFormPreferences');
function createJsonschemaFormPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.JsonschemaFormConigurationSchema);
}
exports.createJsonschemaFormPreferences = createJsonschemaFormPreferences;
function bindJsonschemaFormPreferences(bind) {
    bind(exports.JsonschemaFormPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createJsonschemaFormPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.JsonschemaFormConigurationSchema });
}
exports.bindJsonschemaFormPreferences = bindJsonschemaFormPreferences;
//# sourceMappingURL=jsonschema-form-preferences.js.map