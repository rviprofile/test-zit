import styled from "@emotion/styled";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
`;

export const Header = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text};
  opacity: 0.6;
  display: grid;
  grid-template-columns: 0.3fr 0.3fr 2fr 1fr 1fr;
  justify-items: start;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.primary};
`;
