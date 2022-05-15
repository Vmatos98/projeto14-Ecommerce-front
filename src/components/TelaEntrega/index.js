import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ContextDadosCheckout from '../../context/dadosCheckout.js';

import Paragrafo from '../utils/Paragrafo.js';
import Botao from '../utils/Botao.js';

import { ThreeDots } from 'react-loader-spinner';
import { Container } from './../TelaCadastro/style.js';

function TelaDadosEntrega() {
    const arrayInputs = ['Rua', 'Cidade', 'Estado', 'País','CEP'];
    const { dadosCheckout, setDadosCheckout } = useContext(ContextDadosCheckout);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function postCheckoutCompra(e){
        e.preventDefault();

        setDisabled(true);
        setLoading(true);
        console.log(dadosCheckout);

        //garantir que todos os campos estão preenchidos
        //salvar no localStorage
        //get dos produtos do carrinho e valor total
        //post do pedido em collection 'sale'
    }
    
    console.log(dadosCheckout); //apagar

    return ( 
        <Container>
            <Paragrafo conteudo="Eletrônicos Marba" classe="title" />
            <form onSubmit={postCheckoutCompra}>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} value={dadosCheckout.street}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, street: e.target.value})} />

                    <input type="text" placeholder={arrayInputs[1]} value={dadosCheckout.city}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, city: e.target.value})} />

                    <input type="text" placeholder={arrayInputs[2]} value={dadosCheckout.state}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, state: e.target.value})} />

                    <input type="text" placeholder={arrayInputs[3]} value={dadosCheckout.country}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, country: e.target.value})} />

                    <input type="text" placeholder={arrayInputs[4]} value={dadosCheckout.cep}
                    required disabled={disabled}
                    onChange={(e)=>setDadosCheckout({...dadosCheckout, cep: e.target.value})} />
                </div>
                <div className="botao">
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} disabled={disabled} /> 
                        : <Botao tipo="submit" conteudo="Finalizar compra" disabled={disabled} />
                    }
                </div>
            </form>
            <Link to="/checkout">
                <Paragrafo conteudo="Voltar a página anterior?" />
            </Link>
        </Container>
    );
}

export default TelaDadosEntrega;