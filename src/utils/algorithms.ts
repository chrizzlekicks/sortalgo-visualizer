const MAX_LENGTH = 120

export const insertionSort = (arr: number[]): number[] => {
  let dupArr: number[] = [...arr]
  let i: number, j: number
  let current: number

  // Insertion sort algorithm
  for (i = 1; i < dupArr.length; i++) {
    current = dupArr[i]
    for (j = i - 1; j >= 0 && dupArr[j] > current; j--) {
      dupArr[j + 1] = dupArr[j]
    }
    dupArr[j + 1] = current
  }
  return dupArr
}

export const countSort = (arr: number[]): number[] => {
  let count: number[] = []
  let output: number[] = []
  let h: number, i: number, j: number, k: number, l: number

  // initialize count with 0
  for (h = 0; h < MAX_LENGTH; h++) {
    count[h] = 0
  }
  console.log(count)

  // count the values of arr and place them in count array
  for (i = 0; i < MAX_LENGTH; i++) {
    count[arr[i]] = count[arr[i]] + 1
  }

  // copy count values from count array to output array
  l = 0
  for (j = 0; j < MAX_LENGTH; j++) {
    for (k = 0; k < count[j]; k++) {
      output[l] = j
      l++
    }
    console.log(output)
  }

  // return output array
  return output
}

export const selectionSort = (arr: number[]): number[] => {
  let dupArr: number[] = Array.from(arr)
  let i: number, j: number, tmp: number
  let min
  for (i = 0; i <= dupArr.length - 1; i++) {
    min = i
    for (j = i + 1; j < dupArr.length; j++) {
      if (dupArr[j] < dupArr[min]) {
        min = j
      }
    }
    tmp = dupArr[min]
    dupArr[min] = dupArr[i]
    dupArr[i] = tmp
    console.log(dupArr)
  }
  return dupArr
}

export const bubbleSort = (arr: number[]): number[] => {
  let dupArr: number[] = Array.from(arr)
  let i: number, j: number, tmp: number

  for (i = dupArr.length - 1; i >= 1; i--) {
    for (j = 0; j <= i; j++) {
      if (dupArr[j] > dupArr[j + 1]) {
        tmp = dupArr[j + 1]
        dupArr[j + 1] = dupArr[j]
        dupArr[j] = tmp
        console.log(dupArr)
      }
    }
    console.log(dupArr)
  }
  return dupArr
}

export const sortingAlgorithms = {
  insertionSort: 'Insertion Sort',
  selectionSort: 'Selection Sort',
  bubbleSort: 'Bubble Sort',
  countSort: 'Count Sort',
}
