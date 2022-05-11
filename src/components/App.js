import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaInicial from './TelaInicial';
import Top from './Top/index';

import './../Assets/reset.css';

function App() {
    return ( 
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<TelaInicial />} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;