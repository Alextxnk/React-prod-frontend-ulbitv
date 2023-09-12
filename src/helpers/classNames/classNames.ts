type Mods = Record<string, boolean | string>;

export const classNames = (
   cls?: string,
   mods?: Mods,
   additional?: string[]
): string => {
   return [
      cls,
      ...additional,
      ...Object.entries(mods)
         .filter(([className, value]) => Boolean(value))
         .map(([className]) => className)
   ].join(' ');
};

// пример использования
// classNames('remove-btn', { hovered: true, red: false }, ['ghost']);
// результат
// 'remove-btn hovered ghost'
