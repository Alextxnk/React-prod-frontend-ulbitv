type Mods = Record<string, boolean | string>;

export const classNames = (
   cls?: string,
   additional?: string[],
   mods?: Mods
): string => {
   return [
      cls,
      ...additional.filter(Boolean),
      ...Object.entries(mods)
         .filter(([className, value]) => Boolean(value))
         .map(([className]) => className)
   ].join(' ');
};

// пример использования
// classNames('remove-btn', ['ghost'], { hovered: true, red: false });
// результат
// 'remove-btn hovered ghost'
