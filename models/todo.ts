export interface ITodo {
  id: string;
  title: string;
  content: string;
  date?: number;
  userId?: string;
}

export interface ITodoState {
  list: ITodo[];
  name: string;
}
