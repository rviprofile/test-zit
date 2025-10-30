import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.palette.primary};
  border-radius: 12px;
  padding: 8px;
  height: fit-content;
  width: 100%;
  height: 100%;
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 4px;
  background: transparent;
  font-size: 16px;
  width: 100%;
  color: ${({ theme }) => theme.palette.text};
`;
