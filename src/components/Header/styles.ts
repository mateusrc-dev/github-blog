import styled from "styled-components";
import background from "../../assets/backgroundHeader.svg";

export const HeaderContainer = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 1.40625rem;
    img.logoImage {
      height: 2.1rem;
      width: 2.8125rem;
    }
    img.title {
      height: 2.375rem;
      width: 9.25rem;
    }
  }
`;
