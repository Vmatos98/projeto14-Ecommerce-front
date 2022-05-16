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
    @media (max-width: 614px){
        h1{
            font-size: 18px;
        }
    }
`;

export const Button = styled.button`
    /* width: auto; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
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
    /* padding: 10px; */
    border-bottom: 1px solid #ccc;
    table{
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
        width: 100%;
    }
    tr{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
    td{
        width: 20%;
        display: flex;
        justify-content:flex-end;
        align-items: center;
    }
    td.itens{
        width: 40%;
        justify-content: space-around;
    }
    td.delete{
        width: 5%;
        /* background: red;
        color: white; */
        border-radius: 5px;
        

    }
    h1.itens{
        width: 50%;
    }
    p.name{
        /* width: calc(50% - 50px); */
        /* width: 50%; */
        /* background: green; */
    }
    p.delete{
        color: #aaa;
        cursor: pointer;
    }
    p{
        font-size: 14px;
    }
    img{
        width: 80px;
        
    }
    input{
        width: 50px;
        height: 30px;
        border: none;
    }
    @media (max-width: 614px){
        p{
        font-size: 11px;
        }
        h1{
        font-size: 13px;
        font-weight: bold;
        color: #333;
        }
        img{
        width: 50px;
        }
        td{
        width: 20%;
        display: flex;
        justify-content:center;
        align-items: center;
        }
    }
    `;
    export const Footer = styled.div`
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background: #8cc38c;
        
    `;