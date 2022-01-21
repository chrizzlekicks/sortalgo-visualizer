export const generateRandomArray = (length: number): number[] => {
  let array: number[] = []
  let number: number
  for (let i = 1; i <= length; i++) {
    number = Math.ceil(2 * i * Math.random())
    array.push(number)
  }
  return array
}

export const convertObj = (input: any): (string | number)[] => {
  if (typeof input === 'object') {
    const arr: (string | number)[] = Object.values(input)
    return arr
  } else {
    return input
  }
}
