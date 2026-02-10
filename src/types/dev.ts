import type { Extension as FromMarkdownExtension } from 'mdast-util-from-markdown'
import type { Options as ToMarkdownExtension } from 'mdast-util-to-markdown'
import type { Extension as MicromarkExtension } from 'micromark-util-types'

declare module 'unified' {
	interface Data {
		micromarkExtensions?: MicromarkExtension[]
		fromMarkdownExtensions?: FromMarkdownExtension[]
		toMarkdownExtensions?: ToMarkdownExtension[]
	}
}
