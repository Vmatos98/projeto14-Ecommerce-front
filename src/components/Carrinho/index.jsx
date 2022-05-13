/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from "react";
import axios from "axios";

import {Section, Header, Button, Carrinho} from "./../Style/Carrinho";

function Cart(){
    const URL = 'http://localhost:5000';
    const cartId = localStorage.getItem("cartId");
    const [productsCart, setProductsCart] = useState([]);
    useEffect(() => {
        const getData = async() =>{
            try{
            const response = await axios.get(`${URL}/cart/getCart/${cartId}`);
            setProductsCart(response.data);
            }catch(err){
                console.log(err);
            }
        }
        getData();
    }, []);
    return(
        <Section>
            <Header>
                <h1>Carrinho de compras</h1>
                <Button>Finalizar compra</Button>
            </Header>
            <Carrinho>
                <table>
                    <tr><td className="itens"><h1 className="itens">Itens</h1></td>
                    <td><h1>Preço</h1></td>
                    <td><h1>Quant.</h1></td>
                    <td><h1>Total</h1></td></tr>
                    { productsCart.map(product => (
                        <tr><td className="itens"> <img src={product.product.image} alt=""/>
                        <p className="name">{product.product.name}</p></td>
                        <td><p>R$ {product.product.value}</p></td>
                        <td><p>{product.product.quantidade}</p></td>
                        <td><p>R$ {(product.product.quantidade * product.product.value).toFixed(2)}</p></td></tr>
                        
                    ))}
                </table>
            </Carrinho>
        </Section>
    );
}

export default Cart;