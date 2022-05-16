import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import {Section, Header, Button, Carrinho,Footer} from "./../Style/Carrinho";
import Top from "../Top";

// import dotenv from 'dotenv';
// dotenv.config();

function Cart(){
    const URL = 'http://localhost:5000';
    const cartId = localStorage.getItem("cartId");
    const [productsCart, setProductsCart] = useState([]);
    const [amount, setAmount] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        const getData = async() =>{
            try{
            const response = await axios.get(`${URL}/cart/getCart/${cartId}`);
            setProductsCart(response.data);
            }catch(err){
                console.log(err);
                swal('Erro ao carregar dados do carrinho');
            }
        }
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function newAmount(e, id){
        if(e<1){
            return;
        }
        setAmount({amount, idProduct:id, amountItem:e})
        
        const newValue = async() =>{
            try{
            const response = await axios.post(`${URL}/cart/newamount/${cartId}`,{amountItem:e, idProduct:id});
            setProductsCart(response.data);
            }catch(err){
                console.log(err);
                swal('Erro ao carregar dados do carrinho');
            }
        }
        newValue();
    }

    function removeItem(id){
        const promise = axios.post(`${URL}/cart/remove/${cartId}`,{idProduct: id});
        promise.then(res => {
        setProductsCart(res.data);   
        }).catch(err => {
            swal("Ocorreu um error ao deletar: " + err.response.data.error);
            document.location.reload(true);
        })
    }

    function finish(){
        const promise = axios.post(`${URL}/cart/finished/${cartId}`);
        promise.then(res => {
            if(!localStorage.getItem('token')){
                swal("Você precisa estar logado para finalizar o pedido");
                setTimeout(() => {
                    navigate("/sign-in");
                }, 800);
            }
            if(localStorage.getItem('token')){
                const total = productsCart.reduce((total, product) => total + product.price * product.amount, 0).toFixed(2);
                localStorage.setItem("total", total);
                setTimeout(() => {
                    navigate('/checkout');
                }, 800);
            }
        }).catch(err => {
            swal("Ocorreu um error ao finalizar: " + err.response.data.error);
            document.location.reload(true);
        })
    }

    return(
        <>
            <Top />
            <Section>
                <Header>
                    <h1>Carrinho de compras</h1>
                    <Button onClick={()=>{finish()}}>Finalizar compra</Button>
                </Header>
                <Carrinho>
                    <table>
                        <tr><td className="itens"><h1 className="itens">Itens</h1></td>
                        <td><h1>Preço</h1></td>
                        <td><h1>Quant.</h1></td>
                        <td><h1>Total</h1></td>
                        <td className="delete"></td></tr>
                        { 
                            productsCart.map(product => (
                                <tr key={product._id}>
                                    <td className="itens"> <img src={product.image} alt=""/>
                                    <p className="name">{product.name}</p></td>
                                    <td><p>R$ {product.price}</p></td>
                                    <td><input type="number" value={product.amount} onChange={e=>newAmount(e.target.value, product._id)} /></td>
                                    <td><p>R$ {(product.amount * product.price).toFixed(2)}</p></td>
                                    <td className="delete"><p className="delete" onClick={()=>removeItem(product._id)}>x</p></td>
                                </tr> 
                            ))
                        }
                    </table>
                </Carrinho>
                <Footer>
                    <div>
                        <p>Total: R$ {productsCart.reduce((total, product) => total + product.price * product.amount, 0).toFixed(2)}</p>
                    </div>
                    
                    <Button onClick={()=>{finish()}}>Finalizar compra</Button>
                </Footer>
            </Section>
        </>
    );
}

export default Cart;