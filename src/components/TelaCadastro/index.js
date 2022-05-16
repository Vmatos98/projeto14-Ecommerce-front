import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; 
import swal from 'sweetalert';
import { ThreeDots } from 'react-loader-spinner';

import Botao from '../utils/Botao.js';
import Paragrafo from '../utils/Paragrafo.js';

import { Container } from "./style";

function TelaCadastro() {
    const arrayInputs = ['Nome', 'E-mail', 'Senha', 'Confirme a senha']
    const [dadosCadastro, setDadosCadastro] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    console.log(dadosCadastro); //apagar

    function limparDados() {
        setDadosCadastro({
            name: '', email: '', password: '', confirmPassword: ''
        });
    }

    async function postDadosCadastro() {
        try {
            const { name, email, password, confirmPassword } = dadosCadastro;
            const objetoCadastro = {
                name: name.trim(),
                email: email.trim(),
                password: password,
                confirmPassword: confirmPassword
            }
            await axios.post('https://ecommerce-back-driven.herokuapp.com/sign-up', objetoCadastro);
            swal(`${name}, seu cadastro foi realizado com sucesso`);
            setTimeout(() => {
                limparDados();
                navigate('/sign-in');
            } , 1000);
        }   
        catch (error) {
            setTimeout(() => {
                swal(`Erro ao realizar o cadastro. Status: ${error.response.status}`);
                setDisabled(false);
                setLoading(false);
                limparDados();
            } , 500);
        }
    }

    function enviarCadastroUsuario(e) {
        e.preventDefault();
        setDisabled(true);
        setLoading(true);
        
        if(dadosCadastro.password === dadosCadastro.confirmPassword) {
            postDadosCadastro();
        }else{
            swal('As senhas são diferentes!');
            setTimeout(() => {
                setDisabled(false);
                setLoading(false);
                setDadosCadastro({...dadosCadastro, password: '', confirmPassword: ''});
            } , 1000);
        }
    }

    return ( 
        <Container>
            <Paragrafo conteudo="Eletrônicos Marba" classe="title" click={()=>navigate('/')} />
            <form onSubmit={enviarCadastroUsuario}>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} value={dadosCadastro.name} 
                    required disabled={disabled}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, name: e.target.value})} />
                    <input type="email" placeholder={arrayInputs[1]} value={dadosCadastro.email} 
                    required disabled={disabled}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, email: e.target.value})} />
                    <input type="password" placeholder={arrayInputs[2]} value={dadosCadastro.password} 
                    required disabled={disabled}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, password: e.target.value})} />
                    <input type="password" placeholder={arrayInputs[3]} value={dadosCadastro.confirmPassword} 
                    required disabled={disabled}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, confirmPassword: e.target.value})} />
                </div>
                <div className="botao">
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} disabled={disabled} /> 
                        : <Botao tipo="submit" conteudo="Cadastrar" disabled={disabled} />
                    }
                </div>
            </form>
            <Link to="/sign-in">
                <Paragrafo conteudo="Já possui conta? Faça login agora!" />
            </Link>
        </Container>
    );
}

export default TelaCadastro;