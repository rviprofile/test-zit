export type TypeTodoItem = {
  id: string;
  order: number;
  text: string;
  status: "DONE" | "IN_PROGRESS" | "DELETED";
  date: string;
};

export type TypeTodoItemList = TypeTodoItem[];
