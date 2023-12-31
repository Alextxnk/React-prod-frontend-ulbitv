// глобальная декларация
declare module '*.scss' {
   interface IClassNames {
      [className: string]: string;
   }
   const classNames: IClassNames;
   export = classNames;
}

declare module '*.svg' {
   import React from 'react';

   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
   export default SVG;
}

declare module '*.png' {
   const value: any;
   export = value;
}

declare module '*.jpg' {
   const value: any;
   export = value;
}

declare module '*.jpeg' {
   const value: any;
   export = value;
}

declare const __IS__DEV__: boolean;
