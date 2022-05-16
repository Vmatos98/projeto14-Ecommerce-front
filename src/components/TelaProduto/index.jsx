/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {Section, Header, Category, Content, Description, Button} from "./../Style/Produto";

function ProductScreen(){
    const [product, setProduct] = useState({});
    const cartId = localStorage.getItem("cartId");
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async() =>{
            try{
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            setProduct(response.data);
            console.log(response.data);
            }catch(err){
                console.log(err);
            }
        }
        getData();
    }, []);
    function addToCart(){
        const data = {
            name: product.name,
            price: product.price,
            amount: 1,
            image: product.image
        }
        console.log(product);
        product.amount = 1;
        const getData = async() =>{
            try{
            await axios.post(`http://localhost:5000/cart/add/${cartId}`,data);
            document.location.reload(true);
            }catch(err){
                console.log(err);
            }
        }
        getData();
        navigate("/carrinho");
    }
    return(
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
                <p className="price">por <span>R${(product.price)&& product.price.toFixed(2)}</span> ou 10x de R${(product.price)&& product.price/10}</p>
                <div>
                    <Button onClick={()=>{addToCart()}}>Adicionar ao carrinho</Button>
                </div>

            </Description>
        </Section>
    );
}
export default ProductScreen;