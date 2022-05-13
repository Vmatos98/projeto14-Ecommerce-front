import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import TelaInicial from './TelaInicial';

import TelaCadastro from './TelaCadastro';
import TelaLogin from './TelaLogin';

import ContextFiltroPesquisa from '../context/filtroPesquisa.js';

import './../Assets/reset.css';

function App() {
    const [filtroPesquisa, setFiltroPesquisa] = useState(null);

    return ( 
        <ContextFiltroPesquisa.Provider value={{filtroPesquisa, setFiltroPesquisa}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicial />} />
                    <Route path="/sign-up" element={<TelaCadastro />} />
                    <Route path="/sign-in" element={<TelaLogin />} />
                </Routes>
            </BrowserRouter> 
        </ContextFiltroPesquisa.Provider>
    );
}

export default App;