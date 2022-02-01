import React from 'react'
import { Area, Array, Beam, Alert } from './Table.style'

export interface BarProps {
  height?: number
}

export interface TableProps {
  array?: number[]
  click?: boolean
}

export const Bar: React.FC<BarProps> = ({ height, ...props }): JSX.Element => {
  return <Beam style={{ height: `${height}rem` }} {...props} />
}

export const Table: React.FC<TableProps> = ({ array, click }): JSX.Element => {
  return (
    <Area>
      <Array>
        {array?.map((elem, index) => {
          return <Bar key={index} height={elem} />
        })}
      </Array>
      {click ? <Alert>The array is already sorted</Alert> : null}
    </Area>
  )
}

export default Table
