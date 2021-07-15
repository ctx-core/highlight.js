import { tick } from '@ctx-core/function'
import { has_dom } from '@ctx-core/dom'
import type { HLJSApi } from './HLJSApi.js'
/**
 * Calls `hljs.initHighlighting` in a DOM environment with dynamically loaded content.
 * @param {HighlightJS} hljs
 */
export async function refresh_initHighlighting(hljs: HLJSApi) {
	if (has_dom) {
		(hljs.initHighlighting as initHighlighting).called = false
		await tick(hljs.initHighlighting)
	}
}
export {
	refresh_initHighlighting as refresh__initHighlighting
}
export interface initHighlighting {
	(): void
	called: boolean
}
