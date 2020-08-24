import React from 'react';
import {TodoList} from './components/TodoList/TodoList';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <header className="shadow"></header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
