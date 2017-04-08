// Type definitions for react-ga 2.1.2
// Project: https://github.com/react-ga/react-ga
// Definitions by: Tim Aldridge <https://github.com/telshin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface EventArgs {
    category: string;
    action: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
}

interface GaOptions {
    name?: string;
    clientId?: string;
    sampleRate?: number;
    siteSpeedSampleRate?: number;
    alwaysSendReferrer?: boolean;
    allowAnchor?: boolean;
    cookieName?: string;
    cookieDomain?: string;
    cookieExpires?: number;
    legacyCookieDomain?: string;
    legacyHistoryImport?: boolean;
    allowLinker?: boolean;
}

export interface InitializeOptions {
    debug?: boolean;
    titleCase?: boolean;
    gaOptions?: GaOptions;
}

export interface FieldsObject {
    [i: string]: any;
}

interface TimingArgs {
    category: string;
    variable: string;
    value: number;
    label?: string;
}

interface Plugin {
    require(name: string, options: any): void;
    execute(pluginName: string, action: string, actionTypeOrPayload: string|Object, payload?: Object): void;
}

interface OutboundLinkArgs {
    label: string;
}

export function initialize(trackingCode: string, options?: InitializeOptions): void;
export function ga(): Function;
export function set(fieldsObject: FieldsObject): void;
export function send(fieldsObject: FieldsObject): void;
export function pageview(path: string): void;
export function modalview(name: string): void;
export function timing(args: TimingArgs): void;
export function event(args: EventArgs): void;
export function exception(fieldsObject: FieldsObject): void;
export const plugin: Plugin;
export function outboundLink(args: OutboundLinkArgs, hitCallback: Function): void;
