import { useState, useEffect, useContext } from "react"; 
import axios from "axios";
import swal from "sweetalert";

import Categoria from "../Categoria/index.js";
import ProdutosEncontrados from "../ProdutosEncontrados.js";
import Top from '../Top/index.jsx';

import ContextFiltroPesquisa from "../../context/filtroPesquisa.js";

import { Container, Main } from "./style.js";
import TelaLoading from "../Loading/index.js";

// import dotenv from "dotenv";
// dotenv.config();

function TelaInicial() {
    const URL = 'http://localhost:5000';
    const [produtosBanco, setProdutosBanco] = useState([]);
    const { filtroPesquisa } = useContext(ContextFiltroPesquisa);

    async function getProdutosMongo() {
        try {
            const response = await axios.get(`${URL}/products`);
            setProdutosBanco(response.data);
        } catch (error) {
            console.log(error);
            swal('Erro ao carregar produtos do banco de dados');
        }
    }

    useEffect(()=>{
        getProdutosMongo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const televisores = produtosBanco.filter(produto => produto.category === "televisores");
    const eletrodomesticos = produtosBanco.filter(produto => produto.category === "eletrodomesticos");
    const smartphones = produtosBanco.filter(produtos => produtos.category === "smartphone");

    return ( 
        <Container>
            <Top />
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
                            <TelaLoading />
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
                            <ProdutosEncontrados dados={filtroPesquisa}/>
                        </section>
                    </nav>
                </Main>
            }
        </Container> 
    );
}

export default TelaInicial;