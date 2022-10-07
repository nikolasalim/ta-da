export interface ITodoItem {
  id: number;
  label: string;
  status: string; // create interface for statuses
}

export interface Props {
  todoItems: ITodoItem[]
}
