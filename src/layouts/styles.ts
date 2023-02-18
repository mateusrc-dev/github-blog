import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['base-border']};
    border-radius: 10px;
    width: 0px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme['base-border-input']};
    border-radius: 0px;
    width: 0px;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
`
