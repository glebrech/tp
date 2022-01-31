import React from 'react';
import Nav from '../Nav/Nav';
import { useState } from 'react/cjs/react.development';
import Tolkien from './Tolkien';
import Orwell from './Orwell';
import { NavLink } from 'react-router-dom';

const Auteurs = () => {

    const [data, setData] = useState([])

    return (
        <>
            <div>
                <Nav />
                <h1>Auteurs</h1>
                <ul>
                    <li> <NavLink exact to="/Auteurs/Tolkien" activeClassName="nav-active" >Tolkien</NavLink></li>
                    <li> <NavLink exact to="/Auteurs/Orwell" activeClassName="nav-active" >Orwell</NavLink></li>
                </ul>


            </div>
        </>
    );
};

export default Auteurs;