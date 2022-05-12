import { useState, useEffect } from "react"; 
import axios from "axios";

import Categoria from "../Categoria/index.js";
import Paragrafo from "../utils/Paragrafo.js";

import { Container, Main } from "./style.js";

function TelaInicial() {
    const [produtosBanco, setProdutosBanco] = useState([]);

    async function getProdutosMongo() {
        try {
            const response = await axios.get("http://localhost:5000/products");
            setProdutosBanco(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProdutosMongo();
    }, []);

    const televisores = produtosBanco.filter(produto => produto.category === "televisores");
    const eletrodomesticos = produtosBanco.filter(produto => produto.category === "eletrodomesticos");
    const smartphones = produtosBanco.filter(produtos => produtos.category === "smartphone");

    return ( 
        <Container>
            <header>topo</header>
            <Main>
                <div className="promocao">Slides/scroll de produtos</div>
                
                    {produtosBanco.length > 0 ? 
                        <nav>
                            <Categoria dados={televisores} categoria="Televisores" />
                            
                            <Categoria dados={smartphones} categoria="Smatphones" />
                            
                            <Categoria dados={eletrodomesticos} categoria="Eletrodomésticos" /> 
                        </nav>
                        : 
                        <aside>
                            <Paragrafo conteudo="E-commerce em manutenção, volte novamente mais tarde!" />
                        </aside>
                    }
            </Main>
        </Container> 
    );
}

export default TelaInicial;