import * as React from 'react'
import { convertObj } from '../utils/helpers'

export interface DropdownProps {
  options: (string | number)[] | {}
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setAlgo?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setArrLength?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
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
