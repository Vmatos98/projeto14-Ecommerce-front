import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Roboto', sans-serif;
    overflow-y: scroll;
    background-color: #ececec;
`;

const Main = styled.main`
    width: 100%;
    height: auto;
    margin-top: 12vh;
    
    .navegacao{
        width: 100%;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        a{
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            p{
                width: 70%;
                height: 35px;
                background-color: green;
                opacity: 0.8;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                font-weight: 700;
                font-size: 18px;
                line-height: 23px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

    }

    .pesquisa-produtos{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            width: 70%;
            height: 40px;
            background-color: green;
            opacity: 0.8;
            display: flex;
            justify-content: center;
            align-items: center;
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

    .nao-encontrados{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @keyframes neon{
            from{
                filter: drop-shadow(0 0 10px #ececec);
            }
            to{
                filter: drop-shadow(0 0 40px green);
            }
        }
        
        strong{
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            color: #FFFFFF;
            margin-top: 30px;
            background-color: green;
            opacity: 0.8;
            border-radius: 5px;
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            animation: neon 3s alternate infinite ease-in-out;
        }

        p{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFFFFF;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            line-height: 23px;
            letter-spacing: 0.01em; 
            background: rgba( 255, 255, 255, 0.35 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 13.5px );
            -webkit-backdrop-filter: blur( 13.5px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
        }
    }
    
    aside{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;

        p{
            width: 100%;
            height: 120px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            color: #FFFAFA;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            line-height: 23px;
            letter-spacing: 0.01em; 
            background: rgba( 255, 255, 255, 0.35 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 13.5px );
            -webkit-backdrop-filter: blur( 13.5px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
        }
    }

    nav{
        width: 100%;
        height: auto;
        margin-bottom: 20px;

        #televisores, #smartphones, #eletrodomesticos{
            margin-top: 25px;
        }

        section{
            width: 100%;
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
                text-transform: uppercase;
                color: #FFFAFA;
                background: green;
                opacity: 0.8;
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                backdrop-filter: blur( 13.5px );
                -webkit-backdrop-filter: blur( 13.5px );
                border-radius: 10px;
                border: 1px solid rgba( 255, 255, 255, 0.18 );
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

    @media (min-width: 768px){
        nav{
            margin-bottom: 70px;
        }

        nav section {
            margin-top: 35px;

            h1{
                min-height: 40px;
                font-size: 24px;
            }

            .produtos{
                padding: 0 15px;
                margin-top: 24px;
            }

            .produtos .produto{
                min-width: 170px;
                min-height: 200px;
    
                img{
                    width: 90%;
                    height: 100px;
                }
    
                p, strong{
                    padding: 0 10px;
                    font-size: 22px;
                    height: 30px;
                    line-height: 20px;
                    display: flex;
                    align-items: center;
                }
            }
        }

        .navegacao{
            height: 170px;
        }

        .pesquisa-produtos p{
            height: 50px;
            font-size: 24px;
            margin-top: 20px;
        }

        .nao-encontrados {
            p{
                font-size: 24px;
            }

            strong{
                font-size: 22px;
                height: 45px;
            }
        }   
    }
`;

export { Container, Main };