import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaInicial from './TelaInicial';
import Top from './Top/index';
import Cart from './Carrinho/index';
import ProductScreen from './../components/TelaProduto/index';

import './../Assets/reset.css';

function App() {
    return ( 
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/produto/:id" element={<ProductScreen />} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;