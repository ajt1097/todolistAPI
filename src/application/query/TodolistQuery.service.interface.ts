import { Todolist } from '@src/domain/domain/todolist';

export const TODOLIST_QUERY_SERVICE_SYMBOL = Symbol(
  'TODOLIST_QUERY_SERVICE_SYMBOL',
);

export interface ITodolistQueryService {
  getAllTodolist(): Promise<Todolist[]>;
  getTodolist(id: string): Promise<Todolist>;
}
