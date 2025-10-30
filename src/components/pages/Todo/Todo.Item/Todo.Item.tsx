import { TypeTodoItem } from "@/types";
import * as S from "./Todo.Item.styles";
import { useFormContext } from "react-hook-form";
import React, { useRef } from "react";
import { Checkbox } from "@/components/common/Checkbox/Checkbox";
import { formatDate } from "date-fns";

export const TodoItem = ({ item }: { item: TypeTodoItem }) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const handleContainerClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== "INPUT") {
      checkboxRef.current?.click();
    }
  };

  return (
    <S.Container onClick={handleContainerClick}>
      <Checkbox name={`todos.${item.id}`} ref={checkboxRef} />
      <S.Number>{item.order}</S.Number>
      <S.Text>{item.text}</S.Text>
      <S.Status>{item.status}</S.Status>
      <S.Date>{formatDate(item.date, "dd.MM.yyyy")}</S.Date>
    </S.Container>
  );
};
