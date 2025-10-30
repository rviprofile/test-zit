"use client";

import { Button } from "@/components/common/Button/Button";
import * as S from "./Todo.Actions.styles";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

export const TodoActions = () => {
  const { watch, formState, setValue } = useFormContext();
  const todos = watch("todos");

  return (
    <S.ButtonsContainer>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          size="large"
          text="Удалить"
          onClick={() => {}}
          disabled={!Object.values(todos).some(Boolean)}
        />
        <Button
          size="large"
          text="Завершить"
          onClick={() => {}}
          disabled={!Object.values(todos).some(Boolean)}
        />
      </div>
    </S.ButtonsContainer>
  );
};
