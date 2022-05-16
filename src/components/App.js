import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import TelaInicial from './TelaInicial';
// import Top from './Top/index';
import Cart from './Carrinho/index';
import ProductScreen from './TelaProduto/index';
import TelaCadastro from './TelaCadastro';
import TelaLogin from './TelaLogin';
import TelaFinalizacao from './TelaDadosUsuario';
import TelaDadosEntrega from './TelaEntrega';

import ContextFiltroPesquisa from '../context/filtroPesquisa.js';
import ContextTokenUsuario from '../context/tokenUsuario.js';
import ContextDadosCheckout from '../context/dadosCheckout.js';

import './../Assets/reset.css';

function App() {
    const [filtroPesquisa, setFiltroPesquisa] = useState(null);
    const [token, setToken] = useState(null);
    const [dadosCheckout, setDadosCheckout] = useState({
        cpf: '', phone: '', typePayment: '', street: '', city: '', 
        state: '', country: '', cep: '', total: 0, products: []
    });

    return ( 
        <ContextTokenUsuario.Provider value={{token, setToken}}>
            <ContextFiltroPesquisa.Provider value={{filtroPesquisa, setFiltroPesquisa}}>
                <ContextDadosCheckout.Provider value={{dadosCheckout, setDadosCheckout}}>
                    {/* <Top /> */}
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TelaInicial />} />
                            <Route path="/sign-up" element={<TelaCadastro />} />
                            <Route path="/sign-in" element={<TelaLogin />} />
                            <Route path="/carrinho" element={<Cart />} />
                            <Route path="/produto/:id" element={<ProductScreen />} />
                            <Route path="/checkout" element={<TelaFinalizacao />} />
                            <Route path="/checkout/delivery" element={<TelaDadosEntrega />} />
                        </Routes>
                    </BrowserRouter> 
                </ContextDadosCheckout.Provider>
            </ContextFiltroPesquisa.Provider>
        </ContextTokenUsuario.Provider>
    );
}

export default App;