# remark-gfm-custom

[![npm Badge](https://img.shields.io/npm/v/remark-gfm-custom?label=&color=050619&style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9ImFsM2VyeHB6YnN5YXhjbjE3cnJmeWs1N2I2YTl5eW8iIGNsYXNzPSJjc3MtMW5pMmpzYSI+PHRpdGxlIGlkPSJhbDNlcnhwemJzeWF4Y24xN3JyZnlrNTdiNmE5eXlvIj5ucG08L3RpdGxlPjxwYXRoIGQ9Ik0yNS45NDMgMEgyLjA1N0MuOTIgMCAwIC45MiAwIDIuMDU3djIzLjg4NkMwIDI3LjA4LjkyIDI4IDIuMDU3IDI4aDIzLjg4NkMyNy4wOCAyOCAyOCAyNy4wOCAyOCAyNS45NDNWMi4wNTdDMjggLjkyIDI3LjA4IDAgMjUuOTQzIDB6IiBmaWxsPSIjQ0IwMDAwIj48L3BhdGg+PHBhdGggZD0iTTUuOTY0IDIyLjM2NWg4LjA4MmwuMDEtMTIuMTAzaDQuMDMxbC0uMDEgMTIuMTEzaDQuMDQxbC4wMS0xNi4xNDNMNS45ODUgNi4yMWwtLjAyMSAxNi4xNTR6IiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+)](https://www.npmjs.com/package/remark-gfm-custom) [![GitHub](https://img.shields.io/badge/Source-050619?style=for-the-badge&logo=github)](https://github.com/quadratz/remark-gfm-custom)

A configurable [remark-gfm][] that allows you to toggle the [GitHub Flavored Markdown
(GFM)][gfm] features.

This package has the same functionality as [remark-gfm], with the additional ability to enable or disable specific GFM features like autolinks, footnotes, tables, and more.

## Installation

```bash
# Bun
bun add remark-gfm-custom

# Deno
deno add npm:remark-gfm-custom

# pnpm
pnpm add remark-gfm-custom

# npm
npm install remark-gfm-custom
```

## Usage

```ts
import assert from 'node:assert'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'
import { remarkGfmCustom } from 'remark-gfm-custom'

const file = await unified()
  .use(remarkParse)
  // This disables the GFM autolink feature.
  .use(remarkGfmCustom, { plugins: { autolinkLiteral: false } })
  .use(remarkRehype)
  .use(rehypeStringify)
  .process('https://example.com')

assert.equal(file.toString(), '<p>https://example.com</p>')
```

### API

This package exports the following:

#### `remarkGfmCustom`

```ts
function remarkGfmCustom(options?: Options): void
```

The main plugin. It receives one optional parameter to configure behavior. See the [`Options` section](#options) below for configuration details.

#### `Options`

```ts
type Options = {
  remarkGfm?: FootnoteOptions | TableOptions | StrikethroughOptions
  plugins?: {
    autolinkLiteral?: boolean
    footnote?: boolean
    strikethrough?: boolean
    table?: boolean
    taskListItem?: boolean
  }
}
```

Configuration for [`remarkGfmCustom`](#remarkgfmcustom). This consists of two main categories: [`remarkGfm`](#remarkgfm) and [`plugins`](#plugins).

##### `remarkGfm`

```ts
type remarkGfm = FootnoteOptions | TableOptions | StrikethroughOptions
```

Options passed directly to the [remark-gfm][] plugins. The available fields are:

##### `firstLineBlank`

```ts
type firstLineBlank = boolean
```

Serialize with a blank line for the first line of footnote definitions.

- Default: `false`.
- Reference: <https://github.com/remarkjs/remark-gfm#options>

##### `stringLength`

```ts
type stringLength = (value: string) => number
```

Detect the size of table cells, used when aligning cells.

- Default: `d => d.length`.
- Reference: <https://github.com/remarkjs/remark-gfm#options>
  
##### `singleTilde`

```ts
type singleTilde = boolean
```

Whether to support strikethrough with a single tilde. Single tildes work on GitHub but are technically prohibited by GFM.

- Default: `true`.
- Reference: <https://github.com/remarkjs/remark-gfm#options>
  
##### `tablePipeAlign`

```ts
type tablePipeAlign = boolean
```

Whether to align table pipes.

- Default: `true`.
- Reference: <https://github.com/remarkjs/remark-gfm#options>

##### `tableCellPadding`

```ts
type tableCellPadding = boolean
```

Whether to add a space of padding between table pipes and cells.

- Default: `true`.
- Reference: <https://github.com/remarkjs/remark-gfm#options>

##### `plugins`

Options to enable or disable specific [remark-gfm][] bundled plugins.

All fields below are `boolean` and default to `true`. Set a field to `false` to disable that specific GFM feature.

##### `autolinkLiteral`

Toggle [GFM literal autolinks](https://github.com/micromark/micromark-extension-gfm-autolink-literal).

##### `footnote`

Toggle the [GFM footnotes](https://github.com/micromark/micromark-extension-gfm-footnote).

##### `strikethrough`

Toggle the [GFM strikethrough](https://github.com/micromark/micromark-extension-gfm-strikethrough).

##### `table`

Toggle the [GFM tables](https://github.com/micromark/micromark-extension-gfm-table).

##### `taskListItem`

Toggle the [GFM task list items](https://github.com/micromark/micromark-extension-gfm-task-list-item).

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

[MIT](./LICENSE)

[gfm]: https://github.github.com/gfm/

[remark-gfm]: https://github.com/remarkjs/remark-gfm