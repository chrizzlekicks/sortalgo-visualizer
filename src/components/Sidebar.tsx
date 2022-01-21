import * as React from 'react'
import logo from '../logo.svg'
import { Dropdown } from './Dropdown'
import { sortingAlgorithms } from '../utils/algorithms'

const arrayLength = [5, 10, 15, 20, 25]

export interface SidebarProps {
  arrLength?: number
  algo?: string
  setArrLength: (param: number) => void
  setAlgo: (param: string) => void
  handleSort: () => void
  handleReset: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
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
