import { rspack } from '@rspack/core';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: path.join(__dirname, 'src', 'index.ts'),
  experiments: {
    css: true,
  },
  output: {
    publicPath: '',
    clean: true,
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      // favicon: path.join('src', 'assets', 'favicon.ico'),
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        { from: path.join(__dirname, 'src', 'assets'), to: 'assets' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
