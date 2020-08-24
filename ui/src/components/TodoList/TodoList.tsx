import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const TodoList: React.FC = () => {
    
    const [todos, setTodos] = useState<Todo[] | null>(null);

    const baseUrl = 'http://0.0.0.0:4000';

    useEffect(() => {
        fetchData();
    }, [])

    const toggleComplete = (item: Todo) => {
        let updatedItems = todos?.map(todo => {
            return todo === item ? {...todo as {}, complete: !todo.complete} : todo
        });
        if (updatedItems != undefined)setTodos(updatedItems);  
    };
    // const createTodo = (item) => {};
    // const editTodo = (item) => {};
    // const removeTodo = (item) => {};
    const fetchData = () => {
        axios.get(`${baseUrl}/todos`)
        .then(res => setTodos(res.data))
        .catch(error => console.log(error));
    }

    return (
        <div className="todo-list">
            hello
        </div>
    );
}
