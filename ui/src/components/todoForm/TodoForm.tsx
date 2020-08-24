import React, { useState, useEffect } from 'react'
import { TodoFormProps } from '../../interfaces/interfaces'

export const TodoForm: React.FC<TodoFormProps> = ({createTodo}) => {

    const [title, setTitle] = useState<string|undefined>('');

    useEffect(() => {
        console.log('hello');
    }, []);

    const handleChange = (event: any) => {
        setTitle(event.currentTarget.value);
    }

    const handleClick = (event: any) => {
        event.preventDefault();

        if (!title || title === '') return
        const newTodo: Todo = {
            title: title,
            complete: false
        }

        createTodo(newTodo);
        setTitle('');
    }

    return (
        <div className="todo-form">
            <form>
                <input type="text" value={title} onChange={handleChange} />
                <button type="submit" onClick={handleClick} >create todo</button>
            </form> 
        </div>
    );
}
