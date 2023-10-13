type Comparator<T> = (a: T | unknown, b: T | unknown) => number;
type ComparatorOptions<T> = Record<keyof T | "undefined", Comparator<T>>;

interface IPerson {
  id: number;
  age: number;
  name: string;
}

abstract class PersonSort {
  private static defaultComparator = (a: number, b: number) => a - b;
  private static sortBy(): ComparatorOptions<IPerson> {
    return {
      id: (a: IPerson, b: IPerson) => a?.id - b?.id,
      age: (a: IPerson, b: IPerson) => a?.age - b?.age,
      name: (a: IPerson, b: IPerson) => a?.name.localeCompare(b?.name),
      undefined: PersonSort.defaultComparator,
    } as unknown as ComparatorOptions<IPerson>;
  }
  private static merge<T>(
    left: T[],
    right: T[],
    length: number,
    sorter?: keyof IPerson
  ): T[] {
    const result = new Array<T>();
    let ii = 0;
    let jj = 0;

    function ifTrueLeftElseRight(condition: boolean) {
      if (condition) {
        result.push(left[ii++]);
      } else {
        result.push(right[jj++]);
      }
      --length;
    }

    const comparatorMethod = PersonSort.sortBy()[`${sorter}`];

    while (ii < left.length && jj < right.length)
      ifTrueLeftElseRight(comparatorMethod?.(left[ii], right[jj]) < 0);
    while (length !== 0) ifTrueLeftElseRight(ii < left.length);
    return result;
  }

  public static mergeSort<T>(array: T[], sorter?: keyof IPerson): T[] {
    const length = array.length;
    if (length === 1) return array;
    const middle = length >> 1;
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return PersonSort.merge(
      PersonSort.mergeSort(left, sorter),
      PersonSort.mergeSort(right, sorter),
      length,
      sorter
    );
  }

  public static insertionSort<T>(array: T[], sorter?: keyof IPerson) {
    const previous = [...array];
    const comparatorMethod = PersonSort.sortBy()[`${sorter}`];
    for (let ii = 1; ii < array.length; ii++) {
      const item = array[ii];
      let jj = ii - 1;

      while (comparatorMethod(item, array[jj]) < 0 && jj >= 0) {
        array[jj + 1] = array[jj--];
      }
      array[jj + 1] = item;
    }
    return { previous, sorted: array };
  }
}

const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const objects: IPerson[] = [
  { name: "Fridrich", age: 4, id: 4 },
  { name: "Elizabeth", age: 6, id: 8 },
  { name: "Harrold", age: 0, id: 245 },
  { name: "Bob", age: 1, id: 24 },
  { name: "Zoro", age: 12, id: 50 },
  { name: "Stephen", age: 9, id: 132 },
  { name: "Josh", age: 33, id: 35 },
  { name: "Antoine", age: 18, id: 0 },
  { name: "Ann", age: 99, id: 5 },
  { name: "Steward", age: 44, id: 44 },
  { name: "Robert", age: 10, id: 99 },
  //
];

console.log(nums);
console.log(objects);

console.log("\nMergeSort\n");
console.log(PersonSort.mergeSort(nums));
console.log(PersonSort.mergeSort(objects, "id"));

console.log("\nInsertionSort\n"); // MUTATES
console.log(PersonSort.insertionSort(nums));
console.log(PersonSort.insertionSort(objects, "name"));
