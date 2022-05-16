import { Link } from "react-router-dom";
import TelaLoading from './Loading';

function ProdutosEncontrados(props) {
    const { dados } = props;
    console.log(dados);
    return ( 
        <div className="produtos">
            {
                typeof(dados) === 'object' && dados.length > 0 ?
                dados.map((produto, index)=>{
                    const { image, name, price, _id } = produto;
                    return(
                        <Link to={`/products/${_id}`} key={index}>
                            <div className="produto">
                                <img src={image} alt="produto" />
                                <p>{name}</p>
                                <strong>{price}</strong>
                            </div>
                        </Link>
                    );
                })
                : 
                <div className="nao-encontrados">
                    <TelaLoading />
                    <strong>Clique no ícone de pesquisar</strong>
                </div>
            }
        </div> 
    );
}

export default ProdutosEncontrados;