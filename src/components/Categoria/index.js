import { Link } from 'react-router-dom';

function Categoria(props) {
    const { dados, categoria, id } = props;
    console.log(dados);
    return ( 
        <section id={id}>
            <h1>{categoria}</h1>
            <div className="produtos">
                {
                    dados.map((produto, index)=>{
                        const { image, name, price, _id } = produto;
                        return(
                            <Link to={`/produto/${_id}`} key={index}>
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