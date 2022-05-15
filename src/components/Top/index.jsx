import {useNavigate} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";

import {Header, Search, User} from "./../Style/Top";
import Logo from "../../Assets/img/logoPrincipal.jpg";
function Top(){
    const navigate = useNavigate();
    const URL = 'http://localhost:5000';
    const cartId = localStorage.getItem("cartId");
    const [search, setSearch] = useState('');
    const [amount, setAmount] = useState('');
    
    useEffect(() => {
        
            const createCart = async() =>{
                try{
                const response = await axios.post(`${URL}/cart/create`);
                localStorage.setItem("cartId", response.data);
                }catch(err){
                    console.log(err);
                }
            }
            const getAmount = async() =>{
                const response = await axios.get(`${URL}/cart/amount/${cartId}`);
                setAmount(response.data);

            }
            if(!cartId){
                createCart();
                // document.location.reload(true);
            }

            getAmount();
    
    
    }, []);
    
    function cart(){
        navigate("/carrinho");
    }

    return (
        <Header>
            <img src={Logo} alt="Logo" />
            <Search>
                <input type="text" name="input" placeholder="pesquisar" onChange={e=>setSearch(e.target.value)} />
                <ion-icon name="search-circle-outline"></ion-icon>
            </Search>
            <User>
                <div>
                <ion-icon name="cart-outline" onClick={()=>cart()}></ion-icon>
                <p>{amount}</p>
                </div>
                <div>
                <ion-icon name="person-circle-outline"></ion-icon>
                </div>
            </User>
        </Header>
    );
}

export default Top;