import './App.css';
import Counter from './sprint-1/day-2/assignments/assignment-1-counter-app/Counter';
import Todo from './sprint-1/day-2/assignments/assignment-2-todo-app/Todo';
import JoinUs from './sprint-1/day-1/assignments/JoinUs';
import Settings from './sprint-1/day-1/assignments/Settings';
import Login from './sprint-1/day-1/assignments/Login';
import Contactus from './sprint-1/day-1/assignments/ContactUs';
import Search from './sprint-1/day-1/assignments/Search';
import Help from './sprint-1/day-1/assignments/Help';
import Home from './sprint-1/day-1/assignments/Home';
import Download from './sprint-1/day-1/assignments/Download';
import List from './sprint-1/day-1/assignments/List';


const data = {
  initCount: 0
};

const arr1 = [
  "Android", "Blackberry", "iPhone", "Windows Phone"
];

const arr2 = [
  "Samsung", "HTC", "Micromax", "Apple"
];


function App() {
  return (
    <div className="App">

      <List heading="Mobile Operating System" info={arr1} />
      <List heading="Mobile Manufacturers" info={arr2} />

      <br/>
      <br/>
      <br/>
      <br/>

      <JoinUs/>
      <Settings/>
      <Login/>
      <Contactus/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>

      <br/>
      <br/>
      <br/>
      <br/>

      <Counter {...data} />

      <br/>

      <Todo />

    </div>
  );
}

export default App;
