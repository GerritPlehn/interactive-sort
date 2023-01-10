type compareFunction<T> = (a: T, b: T) => Promise<number>
function swap<T>(items: Array<T>, leftIndex: number, rightIndex: number) {
  const temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}
async function partition<T>(items: Array<T>, compareFn: compareFunction<T>, left: number, right: number) {
  const pivot = items[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while ((await compareFn(items[i], pivot)) > 0) {
      i++
    }
    while ((await compareFn(items[j], pivot)) < 0) {
      j--
    }
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

async function recurse<T>(items: Array<T>, compareFn: compareFunction<T>, left = 0, right = items.length - 1) {
  let index
  if (items.length > 1) {
    index = await partition(items, compareFn, left, right) //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      await recurse(items, compareFn, left, index - 1)
    }
    if (index < right) {
      //more elements on the right side of the pivot
      await recurse(items, compareFn, index, right)
    }
  }
  return items
}

const quickSort = async <T>(
  items: Array<T>,
  compareFn: compareFunction<T> = async (a, b) => (a < b ? -1 : a > b ? 1 : 0)
) => {
  return recurse(items, compareFn)
}

export { quickSort }
