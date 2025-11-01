export type TypeTodoItem = {
  id: string;
  text: string;
  status: "DONE" | "IN_PROGRESS" | "DELETED";
  date: string;
};

export type TypeTodoItemList = TypeTodoItem[];

export type TodoFormValues = {
  todos: Record<string, boolean>;
};
