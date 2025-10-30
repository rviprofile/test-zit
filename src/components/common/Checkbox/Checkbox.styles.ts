import styled from "@emotion/styled";

export const StyledCheckbox = styled.input`
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.palette.primary};
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  position: relative;
  &:hover {
    border-color: ${({ theme }) => theme.palette.secondary};
  }
  &:checked {
    background-color: transparent; /* остаётся прозрачным */
    border-color: ${({ theme }) => theme.palette.primary};
  }
  &:checked::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 10px;
    border-right: 2px solid ${({ theme }) => theme.palette.primary};
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary};
    transform: rotate(45deg);
    bottom: 2px;
  }
`;
