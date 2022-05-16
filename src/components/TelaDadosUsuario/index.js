import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Paragrafo from '../utils/Paragrafo.js';
import Botao from '../utils/Botao.js';

import ContextDadosCheckout from '../../context/dadosCheckout.js';

import { ThreeDots } from 'react-loader-spinner';
import { Container } from '../TelaCadastro/style.js';

// import dotenv from 'dotenv';
// dotenv.config();

function TelaFinalizacao() {
    const URL = 'http://localhost:5000';
    const arrayInputs = ['XXX.XXX.XXX-XX', '(XX) XXXXX-XXXX', 'Dinheiro, Cartão ou Boleto'];
    const { dadosCheckout, setDadosCheckout } = useContext(ContextDadosCheckout);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token') || !localStorage.getItem('cartId')){
            swal('Você não está logado!');
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function limparDados() {
        setDadosCheckout({
            ...dadosCheckout, cpf: '', phone: '', typePayment: '',
        });
    }

    async function carregarDadosCarrinho() {
        
        try { 
            const response = await axios.get(`${URL}/cart/checkout/${localStorage.getItem('cartId')}`);
            setDadosCheckout({...dadosCheckout, products: response.data});
            
            if(response.data.length === 0){
                swal('Seu carrinho está vazio!');
                setTimeout(()=>{
                    navigate('/');
                }, 800);
            }else{
                setTimeout(() => {
                    localStorage.setItem('cpf', dadosCheckout.cpf);
                    localStorage.setItem('phone', dadosCheckout.phone);
                    localStorage.setItem('typePayment', dadosCheckout.typePayment);
                    navigate('/checkout/delivery');
                }, 800);
            }
        } catch (error) {
            swal('Erro ao carregar dados do carrinho');
            setTimeout(() => {
                navigate('/');
                setDisabled(false);
                setLoading(false);
            }, 500);
        }
    }

    function avancarParaEntrega(e) {
        e.preventDefault();
        setDisabled(true);
        setLoading(true);

        const { cpf, phone, typePayment } = dadosCheckout;
        if(cpf && phone && typePayment) {
            const upperPayment = typePayment.toUpperCase();

            if(upperPayment === 'DINHEIRO' || upperPayment === 'CARTAO' || upperPayment === 'BOLETO' || upperPayment === 'CARTÃO') {
                if(localStorage.getItem('total') && localStorage.getItem('cartId')) {
                    carregarDadosCarrinho();
                }else{
                    swal('Você precisa criar um carrinho para finalizar o pedido!');
                    setTimeout(() => {
                        navigate('/');
                    }, 500);
                }
            }else{
                swal('Insira um tipo de pagamento válido');
                setTimeout(() => {
                    setDisabled(false);
                    setLoading(false);
                    setDadosCheckout({...dadosCheckout, typePayment: ''});
                }, 800);
            }
        }else{
            swal('Para avançar, é necessário preencher os campos');
            setTimeout(() => {
                setDisabled(false);
                setLoading(false);
                limparDados();
            }, 800);
        }
    }

    return ( 
        <Container>
            <Paragrafo conteudo="Eletrônicos Marba" classe="title" />
            <form className='info-user' onSubmit={avancarParaEntrega}>
                <div className="inputs">
                    <strong>CPF</strong>
                    <input type="text" placeholder={arrayInputs[0]} value={dadosCheckout.cpf}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, cpf: e.target.value})} />
                    <strong>Telefone</strong>
                    <input type="text" placeholder={arrayInputs[1]} value={dadosCheckout.phone}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, phone: e.target.value})} />
                    <strong>Tipo de pagamento</strong>
                    <input type="text" placeholder={arrayInputs[2]} value={dadosCheckout.typePayment}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, typePayment: e.target.value})} />
                </div>
                <div className="botao info">
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} disabled={disabled} /> 
                        : <Botao tipo="submit" conteudo="Prosseguir para entrega" disabled={disabled} />
                    }
                </div>
            </form>
            <Link to="/">
                <Paragrafo conteudo="Gostaria de comprar mais produtos?" />
            </Link>
        </Container> 
    );
}

export default TelaFinalizacao;