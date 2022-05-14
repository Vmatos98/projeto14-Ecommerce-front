/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from "react";
import axios from "axios";

import {Section, Header, Button, Carrinho,Footer} from "./../Style/Carrinho";

function Cart(){
    const URL = 'http://localhost:5000';
    const cartId = localStorage.getItem("cartId");
    const [productsCart, setProductsCart] = useState([]);
    const [amount, setAmount] = useState({});
    
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

    function newAmount(e, id){
        setAmount({amount, idProduct:id, amountItem:e})
        const newValue = async() =>{
            try{
            const response = await axios.post(`${URL}/cart/newamount/${cartId}`,{amountItem:e, idProduct:id});
            setProductsCart(response.data);
            }catch(err){
                console.log(err);
            }
        }
        newValue();
    }
    function removeItem(id){
        const promise = axios.post(`${URL}/cart/remove/${cartId}`,{idProduct: id});
        promise.then(res => {
        setProductsCart(res.data);   
        }).catch(err => {
            alert("Ocorreu um error ao deletar: " + err.response.data.error);
            document.location.reload(true);
        })
    }
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
                    <td><h1>Total</h1></td>
                    <td className="delete"></td></tr>
                    { productsCart.map(product => (
                        <tr><td className="itens"> <img src={product.image} alt=""/>
                        <p className="name">{product.name}</p></td>
                        <td><p>R$ {product.value}</p></td>
                        <td><input type="number" value={product.quantidade} onChange={e=>newAmount(e.target.value, product._id)} /></td>
                        <td><p>R$ {(product.quantidade * product.value).toFixed(2)}</p></td>
                        <td className="delete"><p className="delete" onClick={()=>removeItem(product._id)}>x</p></td></tr>
                        
                    ))}
                </table>
            </Carrinho>
            <Footer>
                <div>
                    <p>Total: R$ {productsCart.reduce((total, product) => total + product.value * product.quantidade, 0).toFixed(2)}</p>
                </div>
                <div>
                    <p>Frete: R$ 0,00</p>
                </div>
                <div>
                    <p>Total: R$ {productsCart.reduce((total, product) => total + product.value * product.quantidade, 0).toFixed(2)}</p>
                </div>
                <Button>Finalizar compra</Button>
            </Footer>
        </Section>
    );
}

export default Cart;