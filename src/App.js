import './App.css';
import { Display } from './Components/Display';
import { Todo } from './Components/Todo';
import { useState } from 'react'

function App() {
  const [Comments, setComments] = useState([]);
  const addComments = (Comment) => {
    setComments([...Comments, Comment]);
  }
  return (
    <div className="App">
      <>
        <Todo handleSubmit={addComments} />
        <Display Comments={Comments} />
      </>
    </div>
  );
}

export default App;
