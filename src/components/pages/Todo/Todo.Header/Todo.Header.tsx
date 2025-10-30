"use client";
import * as S from "./Todo.Header.styles";

export const TodoHeader = () => {
  return (
    <S.Header>
      <h1>
        Список <span className="highlight">дел</span>, а не просто список
      </h1>
    </S.Header>
  );
};
