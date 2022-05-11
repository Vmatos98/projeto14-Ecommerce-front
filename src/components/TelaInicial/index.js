import Categoria from "../Categoria/index.js";
import { Container, Main } from "./style.js";

function TelaInicial() {
    return ( 
        <Container>
            <header>topo</header>
            <Main>
                <div className="promocao">Slides/scroll de produtos</div>
                
                <nav>
                    <Categoria categoria="Televisores" descricao={`Televisão 32"`} valor="399,99"
                    imagem="https://s2.glbimg.com/-wID7sAoKeObvlmg3AO4e2_FlKQ=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/I/X/4Db2rOT0mMsJuJtQqnSw/2015-08-04-led-tv1.jpg"/>
                    
                    <Categoria categoria="Smartphones" descricao={"Samsung"} valor="699,99" 
                    imagem="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a32-128gb-violeta-4g-4gb-ram-tela-64-cam-quadrupla-selfie-20mp/magazineluiza/155624100/1595344320db4b74ffa559fcb01a992c.jpg"/>
                    
                    <Categoria categoria="Eletrodomésticos" descricao={"AirFryer"} valor="499,99" 
                    imagem="https://cf.shopee.com.br/file/6368825c0d075859aff6ad07de37e22c"/>
                </nav>
            </Main>
        </Container> 
    );
}

export default TelaInicial;