import Link from "next/link";
import styled from "styled-components";

interface IButton {
    title : string;
    fontFamily : string;
}

const DiagramButton =(props : IButton) => {
    return (
        <BorderButton>
        <StyledLink href={'/intro'}>
            <LogoText style ={{fontFamily:props.fontFamily}}>{props.title}</LogoText>
        </StyledLink>
        </BorderButton>
    );

}

export default DiagramButton;

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
        font-size : 55px;
    }
    @media screen and (max-width: 1600px) {
        font-size : 50px;
    }
    @media screen and (max-width: 1440px) {
        font-size : 45px;
    }
    @media screen and (max-width: 1280px) {
        font-size : 35px;
    }
    @media screen and (max-width: 1024px) {
        font-size : 30px;
    }

`;


const StyledLink = styled(Link)`
`;
const BorderButton = styled.button`
border-radius: 20px;
background: #ff8a00;
padding : 0;
margin:0;
width: 35%;

&:hover {
    cursor: pointer;
    background-color: #fff;
    border-width: 5px; 
    border-color: #ff8a00;
}
`;

    
