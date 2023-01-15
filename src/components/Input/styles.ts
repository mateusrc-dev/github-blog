import styled from "styled-components";

export const InputContainer = styled.form`
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
    &:not(:disabled):hover {
      background: ${props => props.theme['base-border-input']};
      transition: background 0.5s;
    }
    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.7);
    }
  }
`;
