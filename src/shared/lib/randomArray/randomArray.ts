import _ from 'lodash';

export const randArr = (length: number): number[] => {
   const min = 0;
   const max = 100;
   const arr: number[] = [...Array(length)];

   for (let i = 0; i < arr.length; i += 1) {
      arr[i] = _.random(min, max);
   }

   return arr;
};
