import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 10vh;
    left: 0;

    section{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 10%;
            height: auto;
        }
    }

    @media (max-width: 425px){
        section{ 
            img{
                width: 15%;
            }
        }
    }
`;