import { useRouter } from "next/router";
import styled from "styled-components";

interface IButton {
    title : string;
    fontFamily : string;
}

const TopButton =(props : IButton) => {
    return (
        <TopLogo>
            <LogoText>
                {props.title}
            </LogoText>
        </TopLogo>   
    );
}

export default TopButton;

const LogoText = styled.p`
    font-family: 'Irish Grover';
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start : 0;
    margin-block-end : 0;
    height:100%;
    color: #fff;
    font-size : 55px;
    
    @media screen and (max-width: 1824px) {
        font-size : 45px;
    }
    @media screen and (max-width: 1600px) {
        font-size : 40px;
    }
    @media screen and (max-width: 1440px) {
        font-size : 38px;
    }
    @media screen and (max-width: 1280px) {
        font-size : 35px;
    }
    @media screen and (max-width: 1024px) {
        font-size : 26px;
    }

`;
const TopLogo = styled.button`
    border-radius: 20px;
    background: #ff8a00;
    padding : 0;
    margin:0;
    width : 336px;
    height : 73px;  

    @media screen and (max-width: 1824px) {
        width : 306px;
        height : 63px;     
    }
    @media screen and (max-width: 1600px) {
        width : 266px;
        height : 55px;  
    }
    @media screen and (max-width: 1440px) {
        width : 236px;
        height : 50px;  
    }
    @media screen and (max-width: 1280px) {
        width : 216px;
        height : 45px;  
    }
    @media screen and (max-width: 1024px) {
        width : 189px;
        height : 45px;  
    }


    
`;