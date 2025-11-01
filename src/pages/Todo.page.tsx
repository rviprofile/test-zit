import { MainContaner } from "@/components/common/MainContaner/MainContaner";
import {
  TodoHeader,
  TodoActions,
  TodoList,
  TodoInput,
} from "@/components/pages/Todo";
import { RootState } from "@/store/store";
import { TodoFormValues } from "@/types";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";

export const TodoPage = () => {
  const [defaultValues, setDefaultValues] = useState<TodoFormValues>({
    todos: {},
  });

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        setDefaultValues(JSON.parse(saved));
      } catch (e) {
        console.error("Неудалось получить значение из localStorage", e);
      }
    } else {
      setDefaultValues({ todos: {} });
    }
  }, []);

  const formProviderProps = useForm<TodoFormValues>({ defaultValues });
  const todos = useSelector((state: RootState) => state.todos.list);

  if (!defaultValues) return null;
  return (
    <FormProvider {...formProviderProps}>
      <MainContaner>
        <TodoHeader />

        <TodoInput />
        <TodoList list={todos} />
        <TodoActions />
      </MainContaner>
    </FormProvider>
  );
};
