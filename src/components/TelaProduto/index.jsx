/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import {Section, Header, Category, Content, Description, Button} from "./../Style/Produto";
import Top from "../Top";

// import dotenv from "dotenv";
// dotenv.config();

function ProductScreen(){
    const URL = 'https://ecommerce-back-driven.herokuapp.com';
    const [product, setProduct] = useState({});
    const cartId = localStorage.getItem("cartId");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async() =>{
            try{
            const response = await axios.get(`${URL}/products/${id}`); ///products/:id
            setProduct(response.data);
            }catch(err){
                swal('Erro ao carregar dados do produto');
                console.log(err);
            }
        }
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    function addToCart(){
        const data = {
            name: product.name,
            price: product.price,
            amount: 1,
            image: product.image
        }
        product.amount = 1;
        const getData = async() =>{
            try{
                await axios.post(`${URL}/cart/add/${cartId}`, data);
                document.location.reload(true);
            }catch(err){
                swal('Erro ao adicionar produto ao carrinho');
                console.log(err);
            }
        }
        getData();
        navigate("/carrinho");
    }
    
    return(
        <>
            <Top />
            <Section>
                <Header>
                    <Category>
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="chevron-forward"></ion-icon>
                    <p>{product.category}</p>
                    <ion-icon name="chevron-forward"></ion-icon>
                    <p>{product.name}</p>
                    </Category><br></br>
                    <h1>{product.name}</h1>
                </Header>
                <Content>
                    <img src={product.image} alt=""/>
                </Content>
                <Description>
                    <p>{product.description}</p>
                    <br></br>
                    <p className="price">por <span>R${ Number(product.price).toFixed(2).replace('.', ',') }</span> 
                    ou 10x de R${ Number(product.price/10).toFixed(3).replace('.', ',') }</p>
                    <div>
                        <Button onClick={()=>{addToCart()}}>Adicionar ao carrinho</Button>
                    </div>
                </Description>
            </Section>
        </>
    );
}

export default ProductScreen;