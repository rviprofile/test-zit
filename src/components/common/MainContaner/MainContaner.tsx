"use client";
import * as S from "./MainContaner.styles";

/** Базовый контейнер. Вертикальный флекс, центрирует контент */
export const MainContaner = ({ children }: { children: React.ReactNode }) => {
  return <S.Container>{children}</S.Container>;
};
