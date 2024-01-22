import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: absolute;
  height: 272px;
  overflow-y: auto;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  background: #fff;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  & ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & button {
    font-size: 18px;
    border: none;
    background-color: transparent;
    color: #8a8a89;
  }
`;
