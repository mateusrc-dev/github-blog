import styled from 'styled-components'

export const LinkContainer = styled.a`
  cursor: pointer;
  border: 1px solid transparent;
  color: ${(props) => props.theme.blue};
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .svg {
    font-size: 0.75rem;
  }

  &:hover {
    border-bottom-color: ${(props) => props.theme.blue};
  }
`
