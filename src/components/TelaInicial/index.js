import { useState, useEffect, useContext } from "react"; 
import axios from "axios";

import Categoria from "../Categoria/index.js";
import Paragrafo from "../utils/Paragrafo.js";
import ProdutosEncontrados from "../ProdutosEncontrados.js";
// import Top from '../Top/index.jsx';

import ContextFiltroPesquisa from "../../context/filtroPesquisa.js";

import { Container, Main } from "./style.js";

function TelaInicial() {
    const [produtosBanco, setProdutosBanco] = useState([]);
    const { filtroPesquisa } = useContext(ContextFiltroPesquisa);
    console.log(filtroPesquisa); //apagar

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
    const filtro = produtosBanco.filter(produto => produto.name.includes(filtroPesquisa));

    return ( 
        <Container>
            {/* <Top /> */}
            {
                !filtroPesquisa ? 
                <Main>
                <div className="navegacao">
                    <a href="#televisores"><p>Televisores</p></a>
                    <a href="#smartphones"><p>Smatphones</p></a>
                    <a href="#eletrodomesticos"><p>Eletrodomésticos</p></a> 
                </div>
                    {produtosBanco.length > 0 ? 
                        <nav>
                            <Categoria dados={televisores} categoria="Televisores" id="televisores" />
                            <Categoria dados={smartphones} categoria="Smatphones" id="smartphones" />
                            <Categoria dados={eletrodomesticos} categoria="Eletrodomésticos" id="eletrodomesticos" /> 
                        </nav>
                        : 
                        <aside>
                            <Paragrafo conteudo="E-commerce em manutenção, volte novamente mais tarde!" />
                        </aside>
                    }
                </Main>
                :
                <Main>
                    <div className="pesquisa-produtos">
                        <p>Produtos encontrados</p>
                    </div>
                    <nav>
                        <section>
                            <ProdutosEncontrados dados={filtro}/>
                        </section>
                    </nav>
                </Main>
            }
        </Container> 
    );
}

export default TelaInicial;