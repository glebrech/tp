import logo from './logo.svg';
import './App.css';
import Nav from './composants/Nav/Nav';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Application de bibliothèque
        </p>
        <Nav/>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

  );
}



export default App;
