type Todo = {
    _id?: string
    title?: string,
    complete?: Boolean
};

type editTodo = (item: Todo) => void;
type removeTodo = (item: Todo) => void;
type createTodo = (item: Todo) => void;
type completeSwitch = (item: Todo) => void;
type checkedStatus = (item: Todo) => boolean;