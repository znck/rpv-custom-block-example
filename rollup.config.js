import vue from 'rollup-plugin-vue'
import yaml from '@rollup/plugin-yaml'
import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/app.js',
  },
  external: [
    // Externalize so that the output code is readable.
    'vue',
    'vue-runtime-helpers',
    'vue-i18n',
  ],
  plugins: [
    yaml(),
    json(),
    i18n(),
    vue({
      customBlocks: ['i18n'],
    }),
  ],
}

function i18n() {
  return {
    transform(source, id) {
      if (/rollup-plugin-vue=i18n/i.test(id)) {
        return {
          code:
            `${source.replace(/export default/, 'const __i18n =')}` +
            `export default function i18n(Component) {\n` +
            `  Component.options.__i18n = Component.options.__i18n || []\n` +
            `  Component.options.__i18n.push(__i18n)\n` +
            `}`,
          map: {
            mappings: '',
          },
        }
      }
    },
  }
}
