import { TypeTodoItem, TypeTodoItemList } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const STORAGE_KEY = "todos_list";

interface TodosState {
  list: TypeTodoItemList;
}

const loadFromLocalStorage = (): TypeTodoItemList => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (list: TypeTodoItemList) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Ошибка при сохранении в localStorage:", e);
  }
};

const initialState: TodosState = {
  list: loadFromLocalStorage(),
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      const newItem: TypeTodoItem = {
        id: new Date().getTime().toString(),
        text: action.payload.text,
        status: "IN_PROGRESS",
        date: new Date().toISOString(),
      };
      state.list.push(newItem);
      saveToLocalStorage(state.list);
    },
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: TypeTodoItem["status"] }>
    ) => {
      const item = state.list.find((t) => t.id === action.payload.id);
      if (item) {
        item.status = action.payload.status;
        saveToLocalStorage(state.list);
      }
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.list = state.list.filter((t) => t.id !== action.payload.id);
      saveToLocalStorage(state.list);
    },
    reorderTodos: (state, action: PayloadAction<TypeTodoItemList>) => {
      state.list = action.payload.map((t, index) => ({
        ...t,
        order: index + 1,
      }));
      saveToLocalStorage(state.list);
    },
  },
});

export const { addTodo, updateStatus, deleteTodo, reorderTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
