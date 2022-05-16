import styled from "styled-components";

export const Section = styled.section`
    position: absolute;
    top: 12vh;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    /* height: 100%; */
    left: 50%;
    transform: translate(-50%,0);
`;
export const Header = styled.header`
    width: 100%;
    h1{
        font-size: 28px;
        color: #515151;
        width: 100%;
    }
`;
export const Category = styled.div`
    display: flex;
    color: #999;
    ion-icon{
        font-size: 18px;
    }
`;
export const Button = styled.button`
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

export const Content = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 80%;
    }
`;

export const Description = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    border-left: 1px solid #ccc;
    p{
        font-size: 18px;
        font-weight: bold;
        color: #767676;
    }
    p.price{
        font-size: 15px;
        font-weight: bold;
        color: #9D9D9D;
        margin-top: 20px;
        span{
            color: #333;
            font-size: 20px;
        }
    }
    div{
        display: flex;
        /* justify-content: center; */
        align-items: center;
        width: 100%;
        margin-top: 20px;
        margin-left: 20px;

    }
`;