"use client";
import { TypeTodoItem, TypeTodoItemList } from "@/types";
import * as S from "./Todo.List.styles";
import { TodoItem } from "../Todo.Item/Todo.Item";
import { Checkbox } from "@/components/common/Checkbox/Checkbox";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDispatch } from "react-redux";
import { reorderTodos } from "@/store/todoSlice";

export const TodoList = ({ list }: { list: TypeTodoItemList }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const { watch, formState, setValue } = useFormContext();
  const todos = watch("todos");
  const sensors = useSensors(useSensor(PointerSensor));
  const dispatch = useDispatch();

  const handleSelectAll = () => {
    const allSelected = Object.values(todos).every(Boolean);
    const newValue = !allSelected;

    Object.keys(todos).forEach((key) => {
      setValue(`todos.${key}`, newValue, { shouldDirty: true });
    });
  };

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        const oldIndex = list.findIndex((i) => i.id === active.id);
        const newIndex = list.findIndex((i) => i.id === over.id);
        dispatch(reorderTodos(arrayMove(list, oldIndex, newIndex)));
      }
    },
    [list]
  );

  if (!mounted) return null;

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
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {list.length > 0 ? (
          <SortableContext items={list} strategy={verticalListSortingStrategy}>
            {list.map((item, index) => {
              return <TodoItem key={item.id} item={item} index={index} />;
            })}
          </SortableContext>
        ) : (
          <S.EmptyState>Пусто</S.EmptyState>
        )}
      </DndContext>
    </S.ListContainer>
  );
};
