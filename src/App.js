import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import ToDoList1 from './ToDoList1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://lawrencecheniv.com">Godspeed, Lorenzo!</a>  
        <Header></Header>
        <Navbar></Navbar>
        <ToDoList1></ToDoList1>
      </header>
    </div>
  );
}

export default App;
