import type { HLJSApi } from './HLJSApi.js';
/**
 * Calls `hljs.initHighlighting` in a DOM environment with dynamically loaded content.
 * @param {HighlightJS} hljs
 */
export declare function refresh_initHighlighting(hljs: HLJSApi): Promise<void>;
export { refresh_initHighlighting as refresh__initHighlighting };
export interface initHighlighting {
    (): void;
    called: boolean;
}
