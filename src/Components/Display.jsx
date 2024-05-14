import React from 'react';
import { TodoItem } from './Todolist'; // Corrected the import

export const Display = ({ Comments }) => {
  return (
    <div className='display'>
      <ul>
        {Comments.map((input, index) => (
          <TodoItem key={index} input={input} />
        ))}
      </ul>
    </div>
  );
}