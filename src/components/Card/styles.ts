import styled from "styled-components";

export const Container = styled.div`
  width: 26rem;
  height: 16.25rem;
`

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border: 2px solid transparent;
  cursor: pointer;
  .markDown {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  &:hover {
    border-color: ${props => props.theme['base-border']};
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
  }
  span {
    white-space: nowrap;
    margin-top: 0.33rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;
