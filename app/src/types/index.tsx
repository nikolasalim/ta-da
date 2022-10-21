export interface ITodoItem {
  id: number;
  label: string;
  status: string; // create ENUM interface for statuses
}

export interface Props {
  todoItems: ITodoItem[]
}
