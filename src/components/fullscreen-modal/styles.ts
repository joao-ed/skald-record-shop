import styled, { keyframes } from 'styled-components'
import { theme } from 'styled-tools'

const fadeOpacity = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Fixed = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  margin-top: 100px;
  transform: translate(-50%, -50%);
`

export const Fullscreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme('colors.white')};
  opacity: 1;
  animation: ${fadeOpacity} 0.2s ease;
  overflow-y: scroll;
`
