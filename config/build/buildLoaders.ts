import webpack from 'webpack';

export const buildLoaders = (): webpack.RuleSetRule[] => {
   const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         // Creates `style` nodes from JS strings
         'style-loader',
         // Translates CSS into CommonJS
         'css-loader',
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
