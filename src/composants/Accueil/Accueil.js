import './Accueil.css';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav';




function Accueil() {
  return (
    
      <header className="App-header">
          
        <p>
          Application de bibliothèque
        </p>
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

  );
}



export default Accueil;
