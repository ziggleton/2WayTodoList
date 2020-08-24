import axios from 'axios';
import { TodoItem } from '../TodoItem/TodoItem';
import React, { useState, useEffect } from 'react';

export const TodoList: React.FC = () => {
    
    const baseUrl: string = 'http://0.0.0.0:4000';

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchData()
    }, [])

    /**
     * Toggles todo complete status
     * @param item 
     */
    const completeSwitch: completeSwitch = (item) => {
        const updatedTodo: Todo = {...item, complete: item.complete ? false : true};  
        editTodo(updatedTodo);
        
    };

    /**
     * Adds todo to the list
     * @param item 
     */
    const createTodo = (item: Todo) => {};

    /**
     * Edits todo item
     * @param item 
     */
    const editTodo = (item: Todo) => {
        axios.post(`${baseUrl}/todos/update/${item._id}`, item)
            .then(res => {
                const updatedTodos = todos.map(todo => {
                    return todo === item ? {...todo, complete: !todo.complete} : todo;
                });
                setTodos(updatedTodos);
            })
            .catch(error => console.log(error));
    };

    /**
     * Removes todo item from the list
     * @param item 
     */
    const removeTodo = (item: Todo) => {
        axios.delete(`${baseUrl}/todos/${item._id}`)
            .then(res => {
                const updatedTodos = todos.filter(todo => todo._id != item._id);
                setTodos(updatedTodos);
            })
            .catch(error => console.log(error));
    };

    /**
     * get Data from API
     */
    const fetchData = () => {
        axios.get(`${baseUrl}/todos`)
        .then(res => {
            setTodos(res.data);
        })
        .catch(error => console.log(error));
    }

    /**
     * Renders Todo list
     */
    const renderList = () => {
        const todolist =  todos.map( todo => {
            return <TodoItem key={todo._id} todo={todo} completeSwitch={completeSwitch} editTodo={editTodo} removeTodo={removeTodo} />
        });

        return todolist
    }

    return (
        
        <div className="todo-list">
            <ul>
                {renderList()}
            </ul>
        </div>
    );
}
