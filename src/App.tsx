import * as React from 'react'
import logo from './logo.svg'
import './app.css'

const sortingAlgorithms = {
  insertionSort: 'Insertion Sort',
  selectionSort: 'Selection Sort',
  bubbleSort: 'Bubble Sort',
  countSort: 'Count Sort',
}

const arrayLength = [5, 10, 15, 20, 25]

const MAX_LENGTH = 120

const generateRandomArray = (length: number): number[] => {
  let array: number[] = []
  let number: number
  for (let i = 1; i <= length; i++) {
    number = Math.ceil(2 * i * Math.random())
    array.push(number)
  }
  return array
}

const insertionSort = (arr: number[]): number[] => {
  let dupArr: number[] = Array.from(arr)
  let i: number, j: number
  let current: number

  // Insertion sort algorithm
  for (i = 1; i < dupArr.length; i++) {
    current = dupArr[i]
    for (j = i - 1; j >= 0 && dupArr[j] > current; j--) {
      dupArr[j + 1] = dupArr[j]
    }
    dupArr[j + 1] = current
    console.log(dupArr)
  }
  return dupArr
}

const countSort = (arr: number[]): number[] => {
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

const selectionSort = (arr: number[]): number[] => {
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

const bubbleSort = (arr: number[]): number[] => {
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

export interface SidebarProps {
  arrLength?: number
  algo?: string
  setArrLength: (param: number) => void
  setAlgo: (param: string) => void
  handleSort: () => void
  handleReset: () => void
}

export interface DropdownProps {
  options: (string | number)[] | {}
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setAlgo?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setArrLength?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface BarProps {
  height?: number
}

// helper
const convertObj = (input: any): (string | number)[] => {
  if (typeof input === 'object') {
    const arr: (string | number)[] = Object.values(input)
    return arr
  } else {
    return input
  }
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  ...props
}): JSX.Element => {
  const newArr: (string | number)[] = convertObj(options)
  return (
    <React.Fragment>
      <select
        className='selector'
        name='sort-select'
        value={props.value}
        onChange={props.onChange}
      >
        {newArr.map((option: string | number, index: number) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </React.Fragment>
  )
}

const Sidebar: React.FC<SidebarProps> = ({
  algo,
  arrLength,
  handleSort,
  handleReset,
  setAlgo,
  setArrLength,
}): JSX.Element => {
  // helper function to handle selections
  const handleSelection = (
    e: React.ChangeEvent<HTMLSelectElement>,
    cb: (param: any) => void
  ): void => {
    cb(e.target.value)
  }
  return (
    <React.Fragment>
      <aside className='sidebar'>
        <section className='sidebar-wrapper'>
          <section className='heading'>
            <img
              src={logo}
              className='App-logo'
              alt='logo'
              width={80}
              height={80}
            />
            <h3 className='title'>React Sort Visualizer</h3>
          </section>
          <section className='select-container'>
            <Dropdown
              value={algo}
              options={sortingAlgorithms}
              onChange={(e) => handleSelection(e, setAlgo)}
            />
            <Dropdown
              value={arrLength}
              options={arrayLength}
              onChange={(e) => handleSelection(e, setArrLength)}
            />
          </section>
          <div className='btn-container'>
            <button type='button' className='btn' onClick={handleSort}>
              Sort
            </button>
            <button type='reset' className='btn' onClick={handleReset}>
              Reset
            </button>
          </div>
        </section>
      </aside>
    </React.Fragment>
  )
}

const Bar: React.FC<BarProps> = ({ height, ...props }): JSX.Element => {
  return (
    <React.Fragment>
      <div className='bar' style={{ height: `${height}rem` }} {...props}></div>
    </React.Fragment>
  )
}

const App: React.FC = (): JSX.Element => {
  const [arrLength, setArrLength] = React.useState<number>(5)
  const [algo, setAlgo] = React.useState<string>('Insertion Sort')
  const [array, setArray] = React.useState<number[]>(() =>
    generateRandomArray(arrLength)
  )
  const [sorted, setSorted] = React.useState<boolean>(false)
  const [click, setClick] = React.useState<boolean>(false)

  const handleSort = (): void => {
    if (sorted) {
      setClick(true)
      return
    }
    switch (algo) {
      case 'Insertion Sort':
        setArray((prevArr) => insertionSort(prevArr))
        break
      case 'Selection Sort':
        setArray((prevArr) => selectionSort(prevArr))
        break
      case 'Bubble Sort':
        setArray((prevArr) => bubbleSort(prevArr))
        break
      case 'Count Sort':
        setArray((prevArr) => countSort(prevArr))
        break
      default:
        setArray((prevArr) => insertionSort(prevArr))
        break
    }
    setSorted(true)
  }

  const handleReset = (): void => {
    setArray(() => generateRandomArray(arrLength))
    setSorted(false)
    setClick(false)
  }

  React.useEffect((): void => {
    setTimeout((): void => {
      setClick(false)
    }, 1000)
  }, [click])

  return (
    <React.Fragment>
      <div className='App'>
        <Sidebar
          algo={algo}
          arrLength={arrLength}
          setAlgo={setAlgo}
          setArrLength={setArrLength}
          handleSort={handleSort}
          handleReset={handleReset}
        />
        <section className='area'>
          <div className='array'>
            {array.map((elem, index) => {
              return <Bar key={index} height={elem} />
            })}
          </div>
          {click ? (
            <div className='alert'>The array is already sorted</div>
          ) : null}
        </section>
      </div>
    </React.Fragment>
  )
}

export default App
