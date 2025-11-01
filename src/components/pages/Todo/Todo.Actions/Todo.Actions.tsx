"use client";

import { Button } from "@/components/common/Button/Button";
import * as S from "./Todo.Actions.styles";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateStatus } from "@/store/todoSlice";

export const TodoActions = () => {
  const { watch, reset } = useFormContext();
  const todos = watch("todos");
  const dispatch = useDispatch();

  const handleDelete = () => {
    Object.keys(todos)
      .filter((key) => key !== "all")
      .filter((key) => todos[key])
      .forEach((key) => {
        dispatch(deleteTodo({ id: key.toString() }));
        reset();
      });
  };

  const handleComplete = () => {
    Object.keys(todos)
      .filter((key) => key !== "all")
      .filter((key) => todos[key])
      .forEach((key) => {
        dispatch(updateStatus({ id: key.toString(), status: "DONE" }));
        reset();
      });
  };

  return (
    <S.ButtonsContainer>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          size="large"
          text="Удалить"
          onClick={handleDelete}
          disabled={!Object.values(todos).some(Boolean)}
        />
        <Button
          size="large"
          text="Завершить"
          onClick={handleComplete}
          disabled={!Object.values(todos).some(Boolean)}
        />
      </div>
    </S.ButtonsContainer>
  );
};
