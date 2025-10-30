import styled from "@emotion/styled";

export const Button = styled.button<{
  size: "small" | "medium" | "large";
  disabled?: boolean;
  variant?: "colorfull" | "default";
  color?: "default" | "green" | "red";
}>`
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-montserrat);
  font-weight: 400;
  background-color: ${({ variant, theme, color }) =>
    variant === "colorfull" ? theme.palette.primary : "transparent"};
  color: ${({ variant, theme, color }) =>
    variant === "colorfull" ? "white" : theme.palette.text};
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "8px 12px";
      case "medium":
        return "12px 16px";
      case "large":
        return "16px 24px";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "12px";
      case "medium":
        return "14px";
      case "large":
        return "16px";
    }
  }};
  ${({ disabled, theme }) =>
    disabled &&
    `
    opacity: 0.4; 
    cursor: default; 
    background-color: transparent;
    pointer-events: none;
    border: 2px dashed ${theme.palette.primary} inset;
    box-shadow: none;
  `}
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;
