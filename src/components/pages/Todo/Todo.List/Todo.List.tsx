import { TypeTodoItemList } from "@/types";
import * as S from "./Todo.List.styles";
import { TodoItem } from "../Todo.Item/Todo.Item";
import { Checkbox } from "@/components/common/Checkbox/Checkbox";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

export const TodoList = ({ list }: { list: TypeTodoItemList }) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const { watch, formState, setValue } = useFormContext();
  const todos = watch("todos");

  const handleSelectAll = () => {
    const allSelected = Object.values(todos).every(Boolean);
    const newValue = !allSelected;

    Object.keys(todos).forEach((key) => {
      setValue(`todos.${key}`, newValue, { shouldDirty: true });
    });
  };
  return (
    <S.ListContainer>
      <S.Header>
        <Checkbox
          name={`todos.all`}
          ref={checkboxRef}
          disabled={!list || list.length === 0}
          onClick={handleSelectAll}
        />
        <p>№</p>
        <p>Название</p>
        <p>Статус</p>
        <p>Дата</p>
      </S.Header>
      {list.length > 0 ? (
        list.map((item) => <TodoItem key={item.id} item={item} />)
      ) : (
        <p>Пусто</p>
      )}
    </S.ListContainer>
  );
};
