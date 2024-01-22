import styled from "styled-components";

export const HeartCheckbox = styled.input`
  &::before {
    content: "";
    display: block;
    background-color: blue;
    width: 12px;
    height: 12px;
  }
  &:checked::before {
    background-color: red;
    width: 12px;
    height: 12px;
  }
`;
