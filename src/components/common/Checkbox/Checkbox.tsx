"use client";
import React from "react";
import * as S from "./Checkbox.styles";
import { useFormContext } from "react-hook-form";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  disabled?: boolean;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, ...props }, ref) => {
    const { register, watch } = useFormContext();
    const isChecked = watch(name);
    const safeChecked = typeof isChecked === "boolean" ? isChecked : false;

    return (
      <S.StyledCheckbox
        {...props}
        type="checkbox"
        {...register(name)}
        ref={(e) => {
          register(name).ref(e);
          if (ref) {
            if (typeof ref === "function") ref(e);
            else ref.current = e;
          }
        }}
        checked={safeChecked}
        disabled={props.disabled}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
