import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Roboto', sans-serif;
    /* background-color: #DCDCDC; */
    background-color: rgba(255,100,14,.5);
    overflow-y: scroll;

    header{
        width: 100%;
        height: 50px;
        background-color: green;
        text-align: center;
    }
`;

const Main = styled.main`
    width: 100%;
    height: auto;
    
    .promocao{
        width: 100%;
        height: 90px;
        background-color: aqua;
        text-align: center;
    }
    
    aside{
        width: 100%;
        height: calc(100vh - 50px - 90px);
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            width: 100%;
            height: 120px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            background-color: rgba(255,100,14,.5);
            color: #FFFAFA;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            line-height: 23px;
            letter-spacing: 0.01em; 
        }
    }

    nav{
        width: 100%;
        height: auto;
        margin-bottom: 20px;

        section{
            width: 100%;
            height: auto;
            /* background-color: #F5F5F5; */
            margin-top: 20px;
            border-radius: 10px;

            h1{
                width: 100%;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 20px;
                font-weight: 600;
                color: black;
                padding: 0 10px;
                line-height: 20px;
                letter-spacing: 0.02em;
            }

            .produtos{
                width: 100%;
                height: auto;
                margin-top: 10px;
                padding: 0 7px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;

                .produto{
                    min-width: 130px;
                    min-height: 160px;
                    border-radius: 5px;
                    padding: 0 4px;
                    background-color: #FFFAFA;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    margin: 4px;

                    img{
                        width: 100%;
                        height: 80px;
                    }

                    p{
                        width: 100%;
                        height: 20px;
                        font-size: 18px;
                        font-weight: 400;
                        letter-spacing: 0.02em;
                    }

                    strong{
                        width: 100%;
                        height: 20px;
                        font-size: 18px;
                        font-weight: 600;
                        letter-spacing: 0.02em;
                    }
                }
            }
        }
    }
`;

export { Container, Main };