import styled from "styled-components";

export const Section = styled.section`
    position: absolute;
    /* background: green; */
    top: 12vh;
    width: 100%;
    max-width: 1000px;
    left: 50%;
    transform: translate(-50%,0);
`;
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    h1{
        font-size: 20px;
        font-weight: bold;
        color: #333;
    }

`;

export const Button = styled.button`
    /* width: 100px; */
    height: 30px;
    border: none;
    background: #55b855;
    color : white;
    border-radius: 5px;
`;

export const Carrinho = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    h1.itens{
        width: 50%;
    }
    `;