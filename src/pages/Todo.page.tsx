import { MainContaner } from "@/components/common/MainContaner/MainContaner";
import {
  TodoHeader,
  TodoActions,
  TodoList,
  TodoInput,
} from "@/components/pages/Todo";
import { RootState } from "@/store/store";
import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";

const defaultValues = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos")!)
  : { todos: {} };

export const TodoPage = () => {
  const formProviderProps = useForm({ defaultValues });
  const todos = useSelector((state: RootState) => state.todos.list);
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
