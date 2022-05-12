import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaInicial from './TelaInicial';
import Top from './Top/index';
import Cart from './Carrinho/index';

import './../Assets/reset.css';

function App() {
    return ( 
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/carrinho" element={<Cart />} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;