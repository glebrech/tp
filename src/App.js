import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Application de bibliothèque
        </p>
        <nav>

          <p>
            User
          </p>

          <p>
            Auteur
          </p>
          <p>
            Genre
          </p>

        </nav>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

  );
}



export default App;
