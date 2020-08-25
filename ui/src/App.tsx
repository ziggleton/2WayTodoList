import React from 'react';
import {TodoList} from './components/TodoList/TodoList';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <header className="shadow"></header>
      <main>
        <div className="container">
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
