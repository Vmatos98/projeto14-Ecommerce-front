import { Link } from "react-router-dom";

function ProdutosEncontrados(props) {
    const { dados } = props;
    return ( 
        <div className="produtos">
            {
                dados.length > 0 ?
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
                    <p>Não encontrados produtos com este filtro em nosso banco de dados</p>
                    <strong>Voltar para home</strong>
                </div>
            }
        </div> 
    );
}

export default ProdutosEncontrados;