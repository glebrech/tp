import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auteurs from './composants/Auteurs/Auteurs';
import Genres from './composants/Genres/Genres';
import Utilisateurs from './composants/Utilisateurs/Utilisateurs';
import Accueil from './composants/Accueil/Accueil';
import NotFound from './composants/NotFound';
import Tolkien from './composants/Auteurs/Tolkien';
import Orwell from './composants/Auteurs/Orwell';
import Dupont from './composants/Utilisateurs/Dupont';
import Hobbit from './composants/Livres/Hobbit';
import LSA from './composants/Livres/LSA';
import LFA from './composants/Livres/LFA';
import Dystopie from './composants/Genres/Dystopie';
import Fantastique from './composants/Genres/Fantastique';
import BiblioTolkien from './composants/Auteurs/Bibliographie/BiblioTolkien';
import BiblioOrwell from './composants/Auteurs/Bibliographie/BiblioOrwell';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/Auteurs" exact element={<Auteurs />} />
        <Route path="/Auteurs/Tolkien" exact element={<Tolkien />} />
        <Route path="/Auteurs/Tolkien/Bibliographie" exact element={<BiblioTolkien />} />
        <Route path="/Auteurs/Orwell" exact element={<Orwell />} />
        <Route path="/Auteurs/Orwell/Bibliographie" exact element={<BiblioOrwell />} />
        <Route path="/Genres" exact element={<Genres />} />
        <Route path="/Genres/Dystopie" exact element={<Dystopie />} />
        <Route path="/Genres/Fantastique" exact element={<Fantastique />} />
        <Route path="/Utilisateurs" exact element={<Utilisateurs />} />
        <Route path="/Utilisateurs/Dupont" exact element={<Dupont />} />
        <Route path="/Hobbit" exact element={<Hobbit />} />
        <Route path="/LSA" exact element={<LSA />} />
        <Route path="/LFA" exact element={<LFA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;