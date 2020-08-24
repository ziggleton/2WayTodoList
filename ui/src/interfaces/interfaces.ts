export interface TodoItemProps {
    todo: Todo,
    completeSwitch: completeSwitch,
    editTodo: editTodo,
    removeTodo: removeTodo
}

export interface TodoListProps {
    todos?: Array<Todo>
}