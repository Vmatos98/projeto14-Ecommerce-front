import { useState, useEffect} from "react";
import axios from "axios";

import {Section, Header, Category, Content, Description, Button} from "./../Style/Produto";

function ProductScreen(){
    return(
        <Section>
            <Header>
                <Category>
                <ion-icon name="home"></ion-icon>
                <ion-icon name="chevron-forward"></ion-icon>
                <p>Categoria</p>
                <ion-icon name="chevron-forward"></ion-icon>
                <p>TV LG 43'</p>
                </Category><br></br>
                <h1>TV LG 43" </h1>
            </Header>
            <Content>
                <img src="https://images-americanas.b2w.io/produtos/01/00/img/3397039/7/3397039711_1GG.jpg" alt=""/>
            </Content>
            <Description>
                <p>Smart TV LG 43" Full HD 43LM6370 Wi-Fi Bluetooth HDR Thinqai Compatível Com Inteligência Artificial</p>
                <br></br>
                <p className="price">por <span>R$2.999,00</span> ou 10x de R$299,00</p>
                <div>
                    <Button>Adicionar ao carrinho</Button>
                </div>

            </Description>
        </Section>
    );
}
export default ProductScreen;