import React, {useState} from 'react';
import './Nav.css';

function Test(props){
    if (props.test){
        return 'TEST'
    }
    else {
        return false
    }
}

function Nav() {
    
    function clickUtilisateurs() {
        console.log('utilisateurs');
    }
    function clickAuteurs() {
        console.log('auteurs');
    }
    function clickGenres() {
        console.log('genres');
    }
    return (
        <>
        <nav>

            <button type="button" onClick={clickUtilisateurs()}>Utilisateurs</button>
            <button type="button" onClick={clickAuteurs()}>Auteurs</button>
            <button type="button" onClick={clickGenres()}>Genres</button>

        </nav>

        <Test test={utilisateurs}/>
        </>
    );
}



export default Nav;
