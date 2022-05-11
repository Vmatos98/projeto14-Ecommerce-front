import { Link } from 'react-router-dom';

import { Container } from "./style";

function TelaCadastro() {
    const arrayInputs = ['Nome', 'E-mail', 'Senha', 'Confirme a senha']

    return ( 
        <Container>
            <form>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} />
                    <input type="email" placeholder={arrayInputs[1]} />
                    <input type="password" placeholder={arrayInputs[2]} />
                    <input type="password" placeholder={arrayInputs[3]} />
                </div>
                <div className="botao">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
            <Link to="/signin">
                <p>Já possui conta? Faça login agora!</p>
            </Link>
        </Container>
    );
}

export default TelaCadastro;