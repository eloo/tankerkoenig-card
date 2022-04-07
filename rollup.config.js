import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/tankerkoenig-card.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [resolve()]
};