function Categoria(props) {
    const { categoria, valor, descricao, imagem } = props;
    return ( 
        <section>
                        
            <h1>{categoria}</h1>
            <div className="produtos">
                <div className="produto">
                    <img src={imagem} alt="produto" />
                    <p>{descricao}</p>
                    <strong>{valor}</strong>
                </div>
                <div className="produto">
                    <img src={imagem} alt="produto" />
                    <p>{descricao}</p>
                    <strong>{valor}</strong>
                </div>
                <div className="produto">
                    <img src={imagem} alt="produto" />
                    <p>{descricao}</p>
                    <strong>{valor}</strong>
                </div>
                <div className="produto">
                    <img src={imagem} alt="produto" />
                    <p>{descricao}</p>
                    <strong>{valor}</strong>
                </div>
            </div>

        </section>
     );
}

export default Categoria;