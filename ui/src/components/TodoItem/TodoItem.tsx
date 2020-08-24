import React, { useEffect } from 'react'
import { TodoItemProps } from '../../interfaces/interfaces'

export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {

    useEffect(() => {
        console.log('hello mand ')    
    }, []);

    return (
        <li>
            <input type="checkbox" />            
        </li>
    )
}
