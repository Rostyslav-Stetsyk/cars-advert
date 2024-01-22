import styled from "styled-components";

export const CarItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;

  & > button {
    margin-top: 28px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 14px;
  height: 268px;

  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  overflow: hidden;

  & img {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    height: 268px;
    width: auto;
  }

  & button {
    position: absolute;
    top: 14px;
    right: 14px;
    background: none;
    border: none;
  }
`;

export const DescWrapper = styled.div`
  margin-top: 14px;
  & p {
    margin-top: 8px;
    color: rgba(18, 20, 23, 0.5);
    font-weight: 400;
    font-size: 12px;
  }
`;

export const TitelAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h3 > span {
    color: #3470ff;
  }
`;
