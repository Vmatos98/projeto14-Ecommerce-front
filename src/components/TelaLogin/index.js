import { Link } from 'react-router-dom';
import { useState } from 'react';

import Paragrafo from '../utils/Paragrafo.js';
import Botao from '../utils/Botao.js';

import { Container } from "../TelaCadastro/style.js";

function TelaLogin() {
    const arrayInputs = ['E-mail', 'Senha'];
    const [dadosLogin, setDadosLogin] = useState({
        email: '', password: ''
    });

    console.log(dadosLogin);

    async function postDadosLogin(e) {
        e.preventDefault();
    }

    return ( 
        <Container>
            <form onSubmit={postDadosLogin}>
                <div className="inputs">
                    <input type="email" placeholder={arrayInputs[0]} value={dadosLogin.email} required 
                    onChange={(e)=>setDadosLogin({...dadosLogin, email: e.target.value})} />
                    <input type="password" placeholder={arrayInputs[1]} value={dadosLogin.password} required 
                    onChange={(e)=>setDadosLogin({...dadosLogin, password: e.target.value})} />
                </div>
                <div className="botao">
                    <Botao tipo="submit" conteudo="Entrar" />
                </div>
            </form>
            <Link to="/signup">
                <Paragrafo conteudo="Não possui conta? Faça seu cadastro!" />
            </Link>
        </Container>
    );
}

export default TelaLogin;