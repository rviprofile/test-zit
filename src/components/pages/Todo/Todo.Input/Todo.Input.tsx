import * as S from "./Todo.Input.styles";
import { Button } from "@/components/common/Button/Button";
import { Input } from "@/components/common/Input/Input";
import { addTodo } from "@/store/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    dispatch(addTodo({ text: inputValue }));
    setInputValue("");
  };

  return (
    <S.InputContainer>
      <Input
        placeholder="Введите текст задачи"
        value={inputValue}
        onChange={setInputValue}
        onSubmit={() => handleSubmit()}
      />
      <Button
        size="large"
        variant="colorfull"
        text="Добавить"
        onClick={() => inputValue.length > 0 && handleSubmit()}
      />
    </S.InputContainer>
  );
};
