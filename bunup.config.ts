import { defineConfig } from 'bunup'

export default defineConfig({
	exports: true,
	unused: {
		level: 'error',
		ignore: [
			// Used in the test.
			'to-vfile',
		],
	},
})
