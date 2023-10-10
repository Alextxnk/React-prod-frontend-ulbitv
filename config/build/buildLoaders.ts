import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = ({
   isDev
}: BuildOptions): webpack.RuleSetRule[] => {
   const babelLoader = {
      test: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env'],
            plugins: [
               [
                  'i18next-extract',
                  { locales: ['ru', 'en'], keyAsDefaultValue: true }
               ]
            ]
         }
      }
   };

   const svgLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // в старой версии не было этого параметра
      use: ['@svgr/webpack']
   };

   const fileLoader = {
      test: /\.(png|jpe?g|gif|woff|woff2)$/i,
      use: [
         {
            loader: 'file-loader'
         }
      ]
   };

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
                  auto: (resPath: string) =>
                     Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
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

   return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
