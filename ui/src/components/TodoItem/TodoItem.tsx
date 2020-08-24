import React, { useEffect, useState, ReactEventHandler } from 'react';
import { TodoItemProps } from '../../interfaces/interfaces';

import './todoItem.scss';

export const TodoItem: React.FC<TodoItemProps> = ({todo, completeSwitch, editTodo, removeTodo}) => {

    const [title, setTitle] = useState<string |undefined>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<Boolean>(false);

    useEffect(() => {
        const titleString = todo.title;
        setTitle(titleString);
        setChecked(todo.complete ? true: false);
    }, []);
    
    const handleCheckedStatus = (todo : Todo) => {
        setChecked(!todo.complete);
        completeSwitch(todo)
    }

    const toggleEdit: () => void  = () => {
        setIsEdit(!isEdit);
    }

    const remove = (todo: Todo) => {
        if(!todo) return;
        removeTodo(todo);
    }

    const handleEdit = (event: any) => {
        const kind = event.currentTarget.dataset.action;
        if (!kind) return;
        kind === 'edit' ? toggleEdit() : remove(todo); 
    }

    const handleTitleChange = (event: any) => {
        const todoItem: Todo = {...todo, title: event.target.value};
        setTitle(event.target.value);
        editTodo(todoItem);
    }

    return (
        <li className={ `todo-list-item ${isEdit ? "editing" : undefined} ${checked ? "complete" : undefined}`}>
            <input type="checkbox" onChange={() => handleCheckedStatus(todo)} checked={checked} />
            <input type="text" onChange={handleTitleChange} value={title} />
            <span className="title">{title}</span>
            <div className="actions">
                <button onClick={handleEdit} data-action="edit">edit</button>
                <button onClick={handleEdit} data-action="remove">remove</button>
            </div>  
        </li>
    )
}
