import styled from "styled-components";

interface IButton {
    title : string;
    fontFamily : string;
}

const Button =(props : IButton) => {
    return (
    <TopLogo>
        <LogoText style ={{fontFamily:props.fontFamily}}>
            {props.title}
        </LogoText>
    </TopLogo>        
    );
}

export default Button;

const LogoText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start : 0;
    margin-block-end : 0;
    height:100%;
    color: #fff;
    &:hover {
        color : #ff8a00;
    }

    font-size : 55px;

    @media screen and (max-width: 1824px) {
        font-size : 52px;  
    }
    @media screen and (max-width: 1600px) {
        font-size : 50px;

    }
    @media screen and (max-width: 1440px) {
        font-size : 47px;

    }
    @media screen and (max-width: 1280px) {
        font-size : 40px;

    }
    @media screen and (max-width: 1024px) {
        font-size : 35px;

    }
`;
const TopLogo = styled.button`
    border-radius: 20px;
    background: #ff8a00;
    padding : 0;
    margin:0;
    width : 189px;
    height : 79px;


    @media screen and (max-width: 1824px) {
        width : 179px;
        height : 74px;   
    }
    @media screen and (max-width: 1600px) {
        width : 170px;
        height : 70px; 
    }
    @media screen and (max-width: 1440px) {

        width : 160px;
        height : 65px; 
    }
    @media screen and (max-width: 1280px) {

        width : 160px;
        height : 60px;
    }
    @media screen and (max-width: 1024px) {

        width : 150px;
        height : 55px;
    }



    &:hover {
        cursor: pointer;
        background-color: #fff;
        border-width: 5px; 
        border-color: #ff8a00;
    }
    


    
`;