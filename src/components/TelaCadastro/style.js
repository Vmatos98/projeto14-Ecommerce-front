import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Roboto', sans-serif;
    background-color: rgba(255,100,14,.5);
    margin-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .inputs, .botao{
        padding: 0 23px;
    }

    form{
        width: 100%;
        height: auto;
        margin-top: 10px;

        .inputs{
            width: 100%;
            height: auto;
            margin-top: 24px;
    
            input{
                width: 100%;
                height: 50px;
                border-radius: 5px;
                margin-bottom: 13px;
                padding: 0 16px;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #000000;
                text-align: left;
                border: none;
                background-color: #FFFFFF;
            }
        }
    
        .botao{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
    
            button{
                width: 100%;
                height: 46px;
                background-color: rgba(255,100,14,.6);
                border-radius: 5px;
                font-weight: 700;
                font-size: 20px;
                line-height: 23px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    a{
        width: 100%;
        max-height: 40px;
        
        p{
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            color: #FFFFFF;
            margin-top: 12px;
        }
    }
`;