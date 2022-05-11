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
                <Route path="/signup" element={<TelaCadastro />} />
                <Route path="/signin" element={<TelaLogin />} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;