/// <reference types="../_types/index.d.ts" />
import { is_browser_ } from 'ctx-core/env'
import { tick } from 'ctx-core/function'
/**
 * Calls `hljs.initHighlighting` in a DOM environment with dynamically loaded content.
 * @param {HLJSApi} hljs
 */
export async function initHighlighting__refresh(hljs) {
	if (is_browser_()) {
		hljs.initHighlighting.called = false
		await tick(hljs.initHighlighting)
	}
}
export {
	initHighlighting__refresh as refresh_initHighlighting,
	initHighlighting__refresh as refresh__initHighlighting,
}
