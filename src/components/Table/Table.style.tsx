import styled from 'styled-components'

export const Area = styled('section')`
  position: relative;
  background-color: #5a5657;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Array = styled('div')`
  padding: 1rem;
  display: flex;
  justify-content: center;
`

export const Beam = styled('div')`
  width: 2rem;
  background-color: #31cafb;
  box-shadow: 0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.75);
`

export const Alert = styled('div')`
  position: absolute;
  bottom: 15vh;
`
