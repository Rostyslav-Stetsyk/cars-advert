import styled from "styled-components";

export const NotFoundImg = styled.img`
  background: radial-gradient(#12141780 0%, transparent 70%);
`;

export const NotFoundTitle = styled.h2`
  font-size: 32px;
`;

export const NotFoundWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & p {
    text-align: center;
  }
  & span {
    font-size: 32px;
  }
`;
