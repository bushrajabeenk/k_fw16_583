import './App.css';
import Counter from './sprint-1/day-2/assignments/assignment-1-counter-app/Counter';
import Todo from './sprint-1/day-2/assignments/assignment-2-todo-app/Todo';


const data = {
  initCount: 0
};

function App() {
  return (
    <div className="App">
      
      <Counter {...data} />

      <br/>

      <Todo />

    </div>
  );
}

export default App;
