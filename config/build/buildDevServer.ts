import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
   return {
      port: options.port,
      open: true,
      // чтобы после обновления страницы все продолжало работать
      historyApiFallback: true,
      hot: true
   };
};
