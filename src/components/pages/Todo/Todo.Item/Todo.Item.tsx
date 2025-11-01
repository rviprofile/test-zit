"use client";
import { TypeTodoItem } from "@/types";
import * as S from "./Todo.Item.styles";
import React, { useRef } from "react";
import { Checkbox } from "@/components/common/Checkbox/Checkbox";
import { formatDate } from "date-fns";
import Image from "next/image";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export const TodoItem = ({
  item,
  index,
}: {
  item: TypeTodoItem;
  index: number;
}) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== "INPUT") {
      checkboxRef.current?.click();
    }
  };

  const translateStatus = (status: string) => {
    switch (status) {
      case "DELETED":
        return "Удалено";
      case "IN_PROGRESS":
        return "В процессе";
      case "DONE":
        return "Завершено";
      default:
        return status;
    }
  };

  return (
    <S.Container
      onClick={handleContainerClick}
      key={item.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Checkbox name={`todos.${item.id}`} ref={checkboxRef} />
      <S.Number>{index + 1}</S.Number>
      <S.Text status={item.status}>{item.text}</S.Text>
      <S.StatusContainer>
        <S.Status status={item.status}>{translateStatus(item.status)}</S.Status>
      </S.StatusContainer>
      <S.Date>{formatDate(item.date, "dd.MM.yyyy")}</S.Date>
      <S.ReorderHandle {...listeners}>
        <Image width={27} height={27} src="/reorder.svg" alt="Reorder" />
      </S.ReorderHandle>
    </S.Container>
  );
};
