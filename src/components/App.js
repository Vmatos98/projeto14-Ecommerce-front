import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaInicial from './TelaInicial';
import TelaCadastro from './TelaCadastro';
import TelaLogin from './TelaLogin';

import './../Assets/reset.css';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/sign-up" element={<TelaCadastro />} />
                <Route path="/sign-in" element={<TelaLogin />} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;