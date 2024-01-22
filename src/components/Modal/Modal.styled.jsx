import ReactModal from "react-modal";
import styled from "styled-components";

ReactModal.setAppElement("#root-modal");

export const StyledModal = styled(ReactModal)`
  display: block;
  max-width: 541px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;

  & h4 {
    margin-top: 24px;
    font-weight: 500;
    font-size: 16px;
  }

  & img {
    max-width: 100%;
    height: auto;
  }

  & button:last-child {
    margin-top: 24px;
  }
`;

export const ButtonCross = styled.button`
  border: none;
  background: none;
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const CarSpecifications = styled.p`
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-weight: 400;
  font-size: 12px;
`;

export const Titel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  & h3 {
    font-weight: 500;
  }
  & h3 > span {
    color: #3470ff;
  }
`;

export const Description = styled.p`
  margin-top: 14px;
`;

export const Condition = styled.span`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  & span {
    color: #3470ff;
  }
`;

export const ConditionList = styled.p`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
