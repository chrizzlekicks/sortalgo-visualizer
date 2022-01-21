import * as React from 'react'

export interface BarProps {
  height?: number
}

export const Bar: React.FC<BarProps> = ({ height, ...props }): JSX.Element => {
  return (
    <React.Fragment>
      <div className='bar' style={{ height: `${height}rem` }} {...props}></div>
    </React.Fragment>
  )
}
