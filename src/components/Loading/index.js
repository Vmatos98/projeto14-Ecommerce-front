import { Container } from './style.js';
import loading from './loading.gif';

function TelaLoading() {
    return ( 
        <Container>
            <section>
                <img src={loading} alt="gif de carregamento" />
            </section>
        </Container>
    );
}

export default TelaLoading;