import * as S from "./Button.styles";

type ButtonProps = {
  text: string;
  onClick: () => void;
  size: "small" | "medium" | "large";
  variant?: "colorfull" | "default";
  disabled?: boolean;
  color?: "default" | "green" | "red";
};

export const Button = ({
  text,
  onClick,
  size,
  variant = "default",
  disabled,
  color = "default"
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      size={size}
      disabled={disabled}
      variant={variant}
      color={color}
    >
      {text}
    </S.Button>
  );
};
