import { interfaces } from 'inversify';
import { PreferenceProxy, PreferenceService, PreferenceSchema } from '@theia/core/lib/browser';
export declare const JsonschemaFormConigurationSchema: PreferenceSchema;
export interface JsonschemaFormConfiguration {
    'jsonschema-form.dataSuffix': string;
}
export declare const JsonschemaFormPreferences: unique symbol;
export declare type JsonschemaFormPreferences = PreferenceProxy<JsonschemaFormConfiguration>;
export declare function createJsonschemaFormPreferences(preferences: PreferenceService): JsonschemaFormPreferences;
export declare function bindJsonschemaFormPreferences(bind: interfaces.Bind): void;
//# sourceMappingURL=jsonschema-form-preferences.d.ts.map