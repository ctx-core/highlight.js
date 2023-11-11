import { has_dom } from '@ctx-core/dom'
import { tick } from '@ctx-core/function'
/**
 * Calls `hljs.initHighlighting` in a DOM environment with dynamically loaded content.
 * @param {import('../_types/index.js').HLJSApi} hljs
 */
export async function initHighlighting__refresh(hljs) {
	if (has_dom) {
		hljs.initHighlighting.called = false
		await tick(hljs.initHighlighting)
	}
}
export {
	initHighlighting__refresh as refresh_initHighlighting,
	initHighlighting__refresh as refresh__initHighlighting,
}
