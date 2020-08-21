export interface Todo {
    id: string,
    title: string,
    completed: boolean,
    due_on: Date
}

export interface TodoList {
    todos: Todo[]
}