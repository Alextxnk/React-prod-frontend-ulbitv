import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = ({
   isDev
}: BuildOptions): webpack.RuleSetRule[] => {
   const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         // Creates `style` nodes from JS strings
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         // Translates CSS into CommonJS
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIndentName: isDev
                     ? '[path][name]__[local]--[hash:base64:5]'
                     : '[hash:base64:8]'
               }
            }
         },
         // Compiles Sass to CSS
         'sass-loader'
      ]
   };

   // если не используем TS - нужен еще babel-loader
   // babel - это специальный транспилятор, который берет новый ES и транспилирует его в старый,
   // чтоб код поддерживался во всех браузерах
   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
   };

   return [cssLoader, typescriptLoader];
};
