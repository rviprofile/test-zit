"use client";
import styles from "./page.module.css";
import { TodoPage } from "@/pages/Todo.page";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <main>
            <TodoPage />
          </main>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
