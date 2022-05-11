import { Link } from 'react-router-dom';

import { Container } from "../TelaCadastro/style.js";

function TelaLogin() {
    const arrayInputs = ['E-mail', 'Senha'];

    return ( 
        <Container>
            <form>
                <div className="inputs">
                    <input type="email" placeholder={arrayInputs[0]} />
                    <input type="password" placeholder={arrayInputs[1]} />
                </div>
                <div className="botao">
                    <button type="submit">Entrar</button>
                </div>
            </form>
            <Link to="/signup">
                <p>Não possui conta? Faça seu cadastro!</p>
            </Link>
        </Container>
     );
}

export default TelaLogin;