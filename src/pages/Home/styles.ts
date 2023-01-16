import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0 15rem;
  .publications {
    display: flex;
    align-items: flex-end;
    margin-top: 4.5rem;
    margin-bottom: 0.75rem;
    justify-content: space-between;
    h1 {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const DetailsUserContainer = styled.header`
  width: 100%;
  height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: -5.5rem;
  overflow: auto;
  img {
    margin-left: 0.5rem;
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
  .details {
    width: 100%;
    h2 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
    }
    p {
      margin-top: 0.5rem;
      text-align: justify;
    }
  }
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .detailsIcons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`

export const DetailsIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
  .svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CardsContainer = styled.main`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
`
