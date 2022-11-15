import styled from "styled-components";

interface IButton {
    title : string;
    fontFamily : string;
    onClick : ()=>void;
}

const ModalButton =(props : IButton) => {
    return (
    <TopLogo onClick={props.onClick}>
        <LogoText style ={{fontFamily:props.fontFamily}}>
            {props.title}
        </LogoText>
    </TopLogo>        
    );
}

export default ModalButton;

const LogoText = styled.p`
    display: flex;
    text-align : center;
    justify-content: center;
    align-items: center;
    margin-block-start : 0;
    margin-block-end : 0;
    height:100%;
    color: #fff;
    &:hover {
        color : #ff8a00;
    }

    font-size : 50px;

    @media screen and (max-width: 1824px) {
        font-size : 45px;  
    }
    @media screen and (max-width: 1600px) {
        font-size : 40px;

    }
    @media screen and (max-width: 1440px) {
        font-size : 25px;
        height : 45px;
        width : inherit;

    }
    @media screen and (max-width: 1280px) {
        font-size : 25px;
        height : 45px;
        width : inherit;
    }
    @media screen and (max-width: 1024px) {
        font-size : 25px;
        height : 45px;
        width : inherit;

    }
`;
const TopLogo = styled.button`
    border-radius: 20px;
    background: #ff8a00;
    padding : 0;
    margin:0;
    width : 80%;

    display: flex;
    text-align : center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1824px) {
        height : 65px;
    }
    @media screen and (max-width: 1600px) {
        height : 65px;
    }
    @media screen and (max-width: 1440px) {
        height : 55px;
    }
    @media screen and (max-width: 1280px) {
        height : 50px;
    }
    @media screen and (max-width: 1024px) {
        height : 45px;

    }

    &:hover {
        cursor: pointer;
        background-color: #fff;
        border-width: 5px; 
        border-color: #ff8a00;
    }
    


    
`;