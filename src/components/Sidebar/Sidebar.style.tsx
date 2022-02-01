import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

export const Side = styled('aside')`
  top: 0;
  left: 0;
  min-height: 100vh;
  max-width: 30vw;
  min-width: 20em;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  z-index: 1;
`

export const Wrapper = styled('section')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Container = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
`

export const Button = styled('button')`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #61dafb;
  background-color: #61dafb;
  border-radius: 0.25rem;
  cursor: pointer;
  min-width: 6rem;
  margin-top: 1rem;

  :hover {
    background-color: #31cafb;
  }
`

export const Header = styled('section')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const Logo = styled('img')`
  height: 10vmin;
  pointer-events: none;
  animation: ${spin} infinite 20s linear;
`

export const Title = styled('h3')`
  text-align: center;
`

export const Selector = styled('select')`
  padding: 0.5rem 1rem 0.5rem 0.25rem;
  background-color: #61dafb;
  font-size: 0.75rem;
  width: 100%;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 1rem;
`
