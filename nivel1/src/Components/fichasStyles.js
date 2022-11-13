import styled from "styled-components";


export const Container = styled.div`
        text-align: center;
        justify-content: center;
        display: flex;
    .sub-main{
        display: flex;
        justify-content: center;
        width: 60%;
        padding-top: 30px;
    }
    .box{
        padding-top:20px;
        justify-content: center;
        display: block;
        align-items: center;
        padding: 20px 0 20px 0;
        width: 100%;
    }
    img{
        border-bottom: solid 0.1rem #EC407A;
        width: 540px;
        width: 100%;
    }
    @media only screen and (max-width:1000px){
        img{
            width: 100%;
        }
    }
`;

export const DetailsContainer = styled.div`
    opacity: 90%;
    border-radius: 10px;
    padding:1rem;
    margin-left:6.5rem;
    margin-right:6.5rem;
    margin-bottom: 2rem;
    color: white;
    justify-content: center;
`;
export const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: 80fr 40fr;
    text-align:left;
    @media only screen and (max-width:500px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 12px;
        text-align:center;
        width: 100%;
    }
`;
export const Left = styled.div`
       
`;
export const Right = styled.div`
`;
export const BoxDetails = styled.div`
`;
export const PilotsAndFilms = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    margin-top: 2rem;
    
    @media only screen and (max-width:500px){
    display: block;
    justify-content: center;
    font-size: 12px;
    }
`;
export const Box = styled.div`
    border: none;
    background-color: #212121;
    color: white;
    text-align: justify;
    margin-bottom: 1rem;
    border-radius: 10px; 
    padding: 0.5rem;
`;