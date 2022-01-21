import React from 'react';
import './Contenu.css';
import React, {useState} from 'react';
import Utilisateurs from '../Utilisateurs/Utilisateurs';




function Contenu() {
    
    
      function toto(){
        useState({bidule:'titi'}) 
      }
    const[utilisateurs,setUtilisateurs] = useState([]);
    const[auteurs,setAuteurs] = useState([]);
    const[genres,setGenres] = useState([]);
    return (

        <div>
            <Utilisateurs utilisateur={}/>

        </div>

    );
}



export default Contenu;
