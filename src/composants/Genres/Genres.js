import React from 'react';
import Nav from '../Nav/Nav';
import Dystopie from './Dystopie';
import Fantastique from './Fantastique';
import { NavLink } from 'react-router-dom';


function Genres() {
    return (

        <div>
            <Nav />
            <h1>Genres</h1>
            <ul>
                <li> <NavLink exact to="/Genres/Dystopie" activeClassName="nav-active" >Dystopie</NavLink></li>
                <li> <NavLink exact to="/Genres/Fantastique" activeClassName="nav-active" >Fantastique</NavLink></li>
            </ul>
        </div>

    );
}



export default Genres;
