export const bubbleSort = (arr: number[]): number[] => {
   for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
         if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
         }
      }
   }

   return arr.map((el) => el);
};

export type BubbleState = {
   array: number[];
   swaps: number;
   comparisons: number;
   i: number;
   j: number;
   done?: boolean;
};

export const bubbleSortInit = (array: number[]): BubbleState => {
   return {
      array,
      swaps: 0,
      comparisons: 0,
      i: array.length - 1,
      j: 0,
      done: false
   };
};

export const bubbleSortStep = (
   state: BubbleState,
   setIsDone?: (isDone: boolean) => void
): BubbleState => {
   let { array, swaps, comparisons, i, j, done } = state;

   if (i <= 0) {
      // setIsDone(true);
      return {
         array,
         swaps,
         comparisons,
         i,
         j,
         done: true
      };
   }

   if (array[j] > array[j + 1]) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      swaps++;
   }

   comparisons++;

   if (++j >= i) {
      i--;
      j = 0;
   }

   return {
      array,
      swaps,
      comparisons,
      i,
      j,
      done
   };
};
