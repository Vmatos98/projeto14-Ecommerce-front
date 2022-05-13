// import { useState, useEffect} from "react";
import axios from "axios";

import { useState, useContext } from "react";
import { Header, Search, User } from "./../Style/Top";
import Logo from "../../Assets/img/logoPrincipal.jpg";
import ContextFiltroPesquisa from "../../context/filtroPesquisa";
import swal from "sweetalert";

function Top(){
    const { filtroPesquisa, setFiltroPesquisa } = useContext(ContextFiltroPesquisa);

    const URL = 'http://localhost:5000';
    const [search, setSearch] = useState('');
    // const cartId = localStorage.getItem("cartId");
    // const [amount, setAmount] = useState('');
    // useEffect(() => {
        
    //         const createCart = async() =>{
    //             const response = await axios.post(`${URL}/cart/create`);
    //             localStorage.setItem("cartId", response.data);
    //         }
    //         const getAmount = async() =>{
    //             const response = await axios.get(`${URL}/cart/amount/${cartId}`);
    //             setAmount(response.data);
    //         }
    //         if(!cartId){
    //             createCart();
    //             document.location.reload(true);
    //         }

    //         getAmount();
    // }, []);
    console.log(filtroPesquisa);

    async function getProdutosFiltrados(){
        try {
            if(filtroPesquisa){
                const response = await axios.get(`${URL}/products?filtro=${filtroPesquisa}`);
                setFiltroPesquisa(response.data);
                setSearch('');
                console.log(response.data);
            }
            if(!filtroPesquisa){
                const response = await axios.get(`${URL}/products`);
                setFiltroPesquisa(response.data);
                setSearch('');
                console.log(response.data);
            }
        } catch (error) {
            swal('Erro ao filtrar produtos no banco de dados');
            setSearch('');
            console.log(error);
        }
    }
    
    return (
        <Header>
            <img src={Logo} alt="Logo" onClick={()=>{setFiltroPesquisa(null)}}/>
            <Search>
                <input type="text" name="input" placeholder="Pesquisar" value={search} 
                onChange={(e)=>{
                    setSearch(e.target.value); setFiltroPesquisa(e.target.value);
                }} />
                <ion-icon name="search-circle-outline" onClick={()=>getProdutosFiltrados()}></ion-icon>
            </Search>
            <User>
                <div>
                <ion-icon name="cart-outline"></ion-icon>
                <p>{0}</p>
                </div>
                <div>
                <ion-icon name="person-circle-outline"></ion-icon>
                </div>
            </User>
        </Header>
    );
}

export default Top;