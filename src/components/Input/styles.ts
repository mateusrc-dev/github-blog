import styled from "styled-components";

export const InputContainer = styled.header`
  input {
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    width: 100%;
    height: 3.125rem;
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border-input']};
    border-radius: 6px;
    &::placeholder {
      color: ${props => props.theme['base-label']};
    }
  }
`;
