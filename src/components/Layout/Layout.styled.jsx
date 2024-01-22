import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 322px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 626px;
  }

  @media screen and (min-width: 1080px) {
    max-width: 930px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1264px;
  }
`;

export const Header = styled.header`
  padding: 5px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;

  & a {
    padding: 14px 44px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #3470ff;
    color: white;
    border: none;

    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;
