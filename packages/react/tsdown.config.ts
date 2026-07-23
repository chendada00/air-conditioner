import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  platform: 'neutral',
  deps: {
    neverBundle: [
      '@air-conditioner/core',
      'react',
      'react-dom',
      /^react\//,
    ],
  },
})
