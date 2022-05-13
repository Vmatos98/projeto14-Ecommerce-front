import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #ccc;
    img{
        height: 100%;
    }
    
`;
export const Search = styled.div`
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            width: 80%;
            height: 100%;
            border: none;
            border: 1px solid black;
            outline: none;
            border-radius: 10px;
            padding: 0 10px;

        }
        ion-icon{
            font-size: 20px;
            height: 100%;
            width: 10%;
        }
`;
export const User = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        position: relative;
        height: 80%;
    ion-icon{
        font-size: 30px;
    }
    p{
            position: absolute;
            bottom: 0%;
            left: 3%;
            font-size: 15px;
            color: white;
            background: green;
            border-radius: 50%;
            padding: 2px 4px;
            /* width: 40%; */
        }
    }
`;