import styled from "styled-components";

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const LoadMoreButton = styled.button`
  color: #3470ff;
  text-decoration-line: underline;
  background: none;
  border: none;
  &:hover {
    color: #0b44cd;
  }
  &:disabled {
    color: #8a8a89;
    cursor: not-allowed;
  }
`;
