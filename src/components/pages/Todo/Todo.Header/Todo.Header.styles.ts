import styled from "@emotion/styled";

export const Header = styled.header`
  border: 1px dashed #eeeeee42;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  color: ${({ theme }) => theme.palette.text};
  text-align: center;
  position: relative;
  h1 {
    font-weight: 400;
    font-family: var(--font-montserrat);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 30px;
  }

  .highlight {
    display: inline-block;
    color: ${({ theme }) => theme.palette.primary};
    font-size: 1.5em;
    transform: rotate(-6deg);
    font-weight: 700;
  }
  .highlight-2 {
    display: inline-block;
    color: ${({ theme }) => theme.palette.primary};
    font-size: 1.2em;
    transform: rotate(-6deg);
    font-weight: 700;
  }
`;
