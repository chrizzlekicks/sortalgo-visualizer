import * as React from 'react'
import logo from '../../logo.svg'
import { sortingAlgorithms } from '../../utils/algorithms'
import { convertObj } from '../../utils/helpers'
import {
  Side,
  Wrapper,
  Container,
  Button,
  Header,
  Logo,
  Title,
  Selector,
} from './Sidebar.style'

const arrayLength = [5, 10, 15, 20, 25]

export interface DropdownProps {
  options: (string | number)[] | {}
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setAlgo?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setArrLength?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface SidebarProps {
  arrLength?: number
  algo?: string
  setArrLength: (param: number) => void
  setAlgo: (param: string) => void
  handleSort: () => void
  handleReset: () => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  ...props
}): JSX.Element => {
  const newArr: (string | number)[] = convertObj(options)
  return (
    <Selector name='sort-select' value={props.value} onChange={props.onChange}>
      {newArr.map((option: string | number, index: number) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        )
      })}
    </Selector>
  )
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
    <Side>
      <Wrapper>
        <Header>
          <Logo src={logo} alt='logo' width={80} height={80} />
          <Title>React Sort Visualizer</Title>
        </Header>
        <Container>
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
        </Container>
        <Container>
          <Button type='button' className='btn' onClick={handleSort}>
            Sort
          </Button>
          <Button type='reset' className='btn' onClick={handleReset}>
            Reset
          </Button>
        </Container>
      </Wrapper>
    </Side>
  )
}
