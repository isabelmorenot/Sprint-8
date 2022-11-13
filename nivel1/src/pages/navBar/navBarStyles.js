import styled from "styled-components";

export const Banner = styled.div `
    display: block;
    @media only screen and (max-width:500px){
        justify-content: center;
        align-items: center;
    }
    .mainIm{
        width: 100%;
    }
    
`;

export const BannerTop = styled.div `
    display: flex;
    img{
        height: 13rem;
        margin-left:16rem;
    }
    @media only screen and (max-width:500px){
        display: flex;
        flex-direction: column;
        
        margin-top: 0;
        font-size: 70%;
        justify-content: left;
        border-top: solid grey 0.5px;
 }
`;

export const TopLeft = styled.div`
    flex-grow: 4;
    text-align: center;

`;

export const BannerButtom = styled.div `
    border-bottom: solid grey 0.5px;
    border-top: solid grey 0.5px;
    ul{
        display: flex;
        justify-content:center;
        gap: 1.5rem;
        color:lightgrey;
        &:hover{
            color:white;
        }
        @media only screen and (max-width:500px){
        display: flex;
        flex-direction: column;
        margin: 0;
        font-size: 100%;
        text-align: center;
    }
    }
    a{
        text-decoration: none;
        color:lightgrey;
        &:hover{
            border-bottom: solid whi 0.3rem;
            font-weight: bold;
            padding: 0.9rem;
            color: white;
        }
    }
    li{
        list-style-type: none;
        border: 1rem;
        border-color: white;
    }
`;

export const TopRight = styled(BannerButtom)`
    font-size: 0.9rem;
    flex-grow: 1;
    margin-top: 2rem;
    border: none;
    a{        
        &:hover{ 
           border-bottom: none;
        }
    }
    .signClass{
        border-left: solid lightgray 0.1px;
        padding-left: 1rem;
    }
`;

