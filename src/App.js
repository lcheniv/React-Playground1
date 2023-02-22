import './App.css';
import TopFriendsList from './TopFriendsList';
import Header from './Header';
import CurrentProjects from './CurrentProjects';
import CurrentProjects2 from './CurrentProjects2';
import AirPodsMax from './AirPodsMax';
import ChatApp from './ChatApp';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://lawrencecheniv.com">Godspeed, Lorenzo!</a>  
        <Header></Header>
      </header>

      {/* <CurrentProjects></CurrentProjects> */}
      {/* <CurrentProjects2></CurrentProjects2> */}
      {/* <AirPodsMax></AirPodsMax> */}
      {/* <ChatApp></ChatApp> */}
      <ToDoList></ToDoList>

    </div>
  );
}

export default App;
