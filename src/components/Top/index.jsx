import { useState} from "react";

import {Header, Search, User} from "./../Style/Top";
import Logo from "../../Assets/img/logoPrincipal.jpg";
function Top(){
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <Header>
            <img src={Logo} alt="Logo" />
            <Search>
                <input type="text" name="input" placeholder="pesquisar" onChange={e=>setSearch(e.target.value)} />
                <ion-icon name="search-circle-outline"></ion-icon>
            </Search>
            <User>
                <div>
                <ion-icon name="cart-outline"></ion-icon>
                <p>0</p>
                </div>
                <div>
                <ion-icon name="person-circle-outline"></ion-icon>
                </div>
            </User>
        </Header>
    );
}

export default Top;