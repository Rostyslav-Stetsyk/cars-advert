import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 18px;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  position: relative;
  font-size: 14px;
  color: #8a8a89;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 14px 18px;
  font-size: 18px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  &#carBrand {
    width: 224px;
  }
  &#perHour {
    width: 125px;
  }
`;

export const StyledFieldSet = styled.fieldset`
  display: flex;
  border: none;
  padding: 0;
  & legend {
    font-size: 14px;
    color: #8a8a89;
  }
  & input {
    width: 160px;
  }
  & input#minMileage {
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid #8a8a89;
  }
  & input#maxMileage {
    border-radius: 0px 14px 14px 0px;
  }
`;

export const ButtonStyled = styled.button`
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
`;
