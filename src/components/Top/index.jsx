import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import swal from "sweetalert";

import ContextFiltroPesquisa from "../../context/filtroPesquisa";

import { Header, Search, User } from "./../Style/Top";
import Logo from "../../Assets/img/logoPrincipal.jpg";

// import dotenv from "dotenv";
// dotenv.config();

function Top(){
    const navigate = useNavigate();
    const { filtroPesquisa, setFiltroPesquisa } = useContext(ContextFiltroPesquisa);

    const URL = 'https://ecommerce-back-driven.herokuapp.com';
    const [search, setSearch] = useState('');
    const [amount, setAmount] = useState('');
    const cartId = localStorage.getItem("cartId");
    
    useEffect(() => {
        const createCart = async() =>{
            try{
                const response = await axios.post(`${URL}/cart/create`);
                localStorage.setItem("cartId", response.data);
            }catch(err){
                swal('Erro ao criar carrinho');
                console.log(err);
            }
        }
        const getAmount = async() =>{
            const response = await axios.get(`${URL}/cart/amount/${cartId}`);
            setAmount(response.data);
        }
        if(!cartId){
            createCart();
        }
        getAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getProdutosFiltrados(){
        try {
            if(filtroPesquisa){
                const response = await axios.get(`${URL}/products?filtro=${filtroPesquisa}`);
                setFiltroPesquisa(response.data);
                setSearch('');
            }
            if(!filtroPesquisa){
                const response = await axios.get(`${URL}/products`);
                setFiltroPesquisa(response.data);
                setSearch('');
            }
        } catch (error) {
            swal('Erro ao filtrar produtos no banco de dados');
            setSearch('');
            console.log(error);
        }
    }
    
    function cart(){
        navigate("/carrinho");
    }

    return (
        <Header>
            <img src={Logo} alt="Logo" onClick={()=>{setFiltroPesquisa(null); navigate('/')}}/>
            <Search>
                <input type="text" name="input" placeholder="Pesquisar" value={search} 
                onChange={(e)=>{
                    setSearch(e.target.value); setFiltroPesquisa(e.target.value);
                }} />
                <ion-icon name="search-circle-outline" onClick={()=>getProdutosFiltrados()}></ion-icon>
            </Search>
            <User>
                <div>
                    <ion-icon name="cart-outline" onClick={()=>cart()}></ion-icon>
                    <p>{amount}</p>
                </div>
                <div>
                    <ion-icon name="person-circle-outline" onClick={()=>navigate('/sign-in')}></ion-icon>
                </div>
            </User>
        </Header>
    );
}

export default Top;