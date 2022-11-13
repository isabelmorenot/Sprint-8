import styled from "styled-components";

export const Container = styled.div`
        text-align: center;
        justify-content: center;
        display: flex;
        padding: 90px 0 90px 0;
    
    .sub-main{
        display: flex;
        justify-content: center;
        height: 400px;
        width: 35%;
        padding-top: 30px;
        border-radius: 60px;
        background-color: #212121;
        @media only screen and (max-width:500px){
            height: 500px;
            width: 70%;
        }
    }
    .box{
        padding-top:20px;
        justify-content: center;
        display: block;
        align-items: center;
    }
    .firstInput{
        margin-top: 20px;
    }
    input{
        margin-top: 20px;
        width: 155px;
        height: 30px;
        border-radius: 60px;
        opacity: 10%;
        border: none;
        
    }
    button{
        width: 100px;
        height: 30px;
        border-radius:60px;
        background-color: grey;
        color: white;
        font-size: 10px;
        font-family: Verdana, Arial, Tahoma, Serif;

    }
    h3{
        color: white;
        font-weight:lighter;
    }
`;