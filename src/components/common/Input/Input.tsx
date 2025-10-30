import { useState } from "react";
import * as S from "./Input.styles";

type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
};

export const Input = ({
  placeholder,
  value = "",
  onChange,
  onSubmit,
}: InputProps) => {
  return (
    <S.InputContainer>
      <S.InputField
        placeholder={placeholder || "Введите текст"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onSubmit(value);
          }
        }}
      />
    </S.InputContainer>
  );
};
