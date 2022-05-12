import { useState, useEffect} from "react";
import axios from "axios";

import {Section, Header, Button, Carrinho, top} from "./../Style/Carrinho";

function Cart(){
    return(
        <Section>
            <Header>
                <h1>Carrinho de compras<span>(itens)</span></h1>
                <Button>Finalizar compra</Button>
            </Header>
            <Carrinho>
                <div>
                    <h1 className="itens">Itens</h1>
                    <h1>Preço</h1>
                    <h1>Quant.</h1>
                    <h1>Total</h1>
                </div>
                
            </Carrinho>
        </Section>
    );
}

export default Cart;