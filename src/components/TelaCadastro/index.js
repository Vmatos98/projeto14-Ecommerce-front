import { Link } from 'react-router-dom';
import { useState } from 'react';

import Botao from '../utils/Botao.js';
import Paragrafo from '../utils/Paragrafo.js';

import { Container } from "./style";

function TelaCadastro() {
    const arrayInputs = ['Nome', 'E-mail', 'Senha', 'Confirme a senha']
    const [dadosCadastro, setDadosCadastro] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    });

    console.log(dadosCadastro);

    async function postDadosCadastro(e) {
        e.preventDefault();
    }

    return ( 
        <Container>
            <form onSubmit={postDadosCadastro}>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} value={dadosCadastro.name} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, name: e.target.value})}/>
                    <input type="email" placeholder={arrayInputs[1]} value={dadosCadastro.email} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, email: e.target.value})}/>
                    <input type="password" placeholder={arrayInputs[2]} value={dadosCadastro.password} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, password: e.target.value})}/>
                    <input type="password" placeholder={arrayInputs[3]} value={dadosCadastro.confirmPassword} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, confirmPassword: e.target.value})}/>
                </div>
                <div className="botao">
                    <Botao tipo="submit" conteudo="Cadastrar" />
                </div>
            </form>
            <Link to="/signin">
                <Paragrafo conteudo="Já possui conta? Faça login agora!" />
            </Link>
        </Container>
    );
}

export default TelaCadastro;