import { Link } from 'react-router-dom';

function Categoria(props) {
    const { dados, categoria } = props;
    console.log(dados);
    return ( 
        <section>
                        
            <h1>{categoria}</h1>
            <div className="produtos">
                {
                    dados.map(produto=>{
                        const { image, name, price, _id } = produto;
                        return(
                            <Link to={`/products/${_id}`}>
                                <div className="produto">
                                    <img src={image} alt="produto" />
                                    <p>{name}</p>
                                    <strong>{price}</strong>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>

        </section>
     );
}

export default Categoria;