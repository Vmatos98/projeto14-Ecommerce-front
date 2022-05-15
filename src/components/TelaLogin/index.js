import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { ThreeDots } from 'react-loader-spinner';

import Paragrafo from '../utils/Paragrafo.js';
import Botao from '../utils/Botao.js';

import ContextTokenUsuario from '../../context/tokenUsuario.js';

import { Container } from "../TelaCadastro/style.js";

function TelaLogin() {
    const arrayInputs = ['E-mail', 'Senha'];
    const [dadosLogin, setDadosLogin] = useState({
        email: '', password: ''
    });
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useContext(ContextTokenUsuario);

    console.log(dadosLogin); //apagar

    function limparDados() {
        setDadosLogin({
            email: '', password: ''
        });
    }

    async function postDadosLogin() {
      try {
        const objetoLogin = {
            email: dadosLogin.email.trim(),
            password: dadosLogin.password
        };
        const response = await axios.post('http://localhost:5000/sign-in', objetoLogin);
        
        setToken(response.data);
        localStorage.setItem('token', response.data);
        swal('Login realizado com sucesso');
        setTimeout(() => {
            limparDados();
            navigate('/');
        } , 1000);
      } catch (error) {
          setTimeout(() => {
            swal(`Erro ao realizar login. Status: ${error.response.status}`);
            setDisabled(false);
            setLoading(false);
            limparDados();
        } , 500);
      }  
    }

    function enviarLoginUsuario(e) {
        e.preventDefault();
        setDisabled(true);
        setLoading(true);

        const { email, password } = dadosLogin;
        if(!email || !password) {
            swal('Preencha todos os campos');
            setTimeout(() => {
                setDisabled(false);
                setLoading(false);
            }, 1000);
        }else{
            postDadosLogin();
        }
    }

    return ( 
        <Container>
            <Paragrafo conteudo="Eletrônicos Marba" classe="title" />
            <form onSubmit={enviarLoginUsuario}>
                <div className="inputs">
                    <input type="email" placeholder={arrayInputs[0]} value={dadosLogin.email} 
                    required disabled={disabled}
                    onChange={(e)=>setDadosLogin({...dadosLogin, email: e.target.value})} />
                    <input type="password" placeholder={arrayInputs[1]} value={dadosLogin.password} 
                    required disabled={disabled}
                    onChange={(e)=>setDadosLogin({...dadosLogin, password: e.target.value})} />
                </div>
                <div className="botao">
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} disabled={disabled} />
                        : <Botao tipo="submit" conteudo="Entrar" disabled={disabled} />
                    }
                </div>
            </form>
            <Link to="/sign-up">
                <Paragrafo conteudo="Não possui conta? Faça seu cadastro!" />
            </Link>
        </Container>
    );
}

export default TelaLogin;