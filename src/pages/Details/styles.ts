import styled from 'styled-components'

export const DetailsContainer = styled.main`
  padding: 0 15rem;
`

export const DetailsPostContainer = styled.header`
  width: 100%;
  height: 10.5rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-top: -5.5rem;
  overflow: auto;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      border: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }
  }
  main {
    p {
      margin-top: 1.25rem;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
    }
  }
  .detailsIcons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }
`

export const DetailsIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-span']};
  .svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostContainer = styled.main`
  padding: 2.5rem 2rem;
`
