import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaInicial from './TelaInicial';

import './../Assets/reset.css';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial />} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;