import * as React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { Table } from './Table/Table'
import { generateRandomArray } from '../utils/helpers'
import {
  insertionSort,
  selectionSort,
  bubbleSort,
  countSort,
} from '../utils/algorithms'
import styled from 'styled-components'

const Main = styled('main')`
  display: flex;
  justify-content: center;
`

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
        setArray((prevArr) => selectionSort(prevArr))
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
    <Main>
      <Sidebar
        algo={algo}
        arrLength={arrLength}
        setAlgo={setAlgo}
        setArrLength={setArrLength}
        handleSort={handleSort}
        handleReset={handleReset}
      />
      <Table array={array} click={click} />
    </Main>
  )
}

export default App
