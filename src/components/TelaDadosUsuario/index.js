import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Paragrafo from '../utils/Paragrafo.js';
import Botao from '../utils/Botao.js';

import ContextDadosCheckout from '../../context/dadosCheckout.js';

import { ThreeDots } from 'react-loader-spinner';
import { Container } from '../TelaCadastro/style.js';

function TelaFinalizacao() {
    const arrayInputs = ['XXX.XXX.XXX-XX', '(XX) XXXXX-XXXX', 'Dinheiro ou Cartão'];
    const { dadosCheckout, setDadosCheckout } = useContext(ContextDadosCheckout);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function limparDados() {
        setDadosCheckout({
            ...dadosCheckout, cpf: '', phone: '', typePayment: '',
        });
    }

    async function carregarDadosCarrinho() {
        setDisabled(true);
        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:5000/chechout/cart/`); //http://localhost:5000/chechout/cart/${id}
            setDadosCheckout({...dadosCheckout, products: response.data});
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

        const { cpf, phone, typePayment } = dadosCheckout;
        if(cpf && phone && typePayment) {
            carregarDadosCarrinho();
            setTimeout(() => {
                localStorage.setItem('dadosCheckout', JSON.stringify(dadosCheckout));
                navigate('/checkout/delivery');
            }, 800);
        }else{
            swal('Para avançar, é necessário preencher os campos');
            setTimeout(() => {
                limparDados();
            }, 800);
        }
    }

    console.log(dadosCheckout); //apagar

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