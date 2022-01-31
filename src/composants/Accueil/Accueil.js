import logo from '../../logo.svg';
import Nav from '../Nav/Nav';





function Accueil() {
  return (

    <div>

      <h1>Application de Bibliothèque React</h1>
      <Nav />
      <img src={logo} className="App-logo" alt="logo" />
    </div>

  );
}



export default Accueil;
