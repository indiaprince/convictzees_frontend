import CenterLogo from "../customicons/CenterLogo";
import styled from "styled-components";

const Center =() => {
    return(
        <div>
        <StyledCenter/>
        <CenterTitle>Convictzees</CenterTitle>
        <CenterSubTitle>The World’s first Stable NFT</CenterSubTitle>
        </div>
    );
}

export default Center

const CenterSubTitle = styled.p`
    position : absolute;

    width: 30%; 
    height: 375px; 

    font-family: 'Impact';    
    text-align: center; 
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 43px;

    color: #000000;

    -webkit-text-stroke: 2px #FF8A00;




    top: 12.5%; 
    left: 50%;
    @media screen and (max-width: 1824px) {
    }
    @media screen and (max-width: 1600px) {
        font-size: 34px;
        top: 12.5%; 
        left: 55%;
    }
    @media screen and (max-width: 1440px) {
        font-size: 32px;
        top: 13%; 
        left: 60%;
    }
    @media screen and (max-width: 1280px) {
        font-size: 28px;
        top: 12%; 
        left: 55%;
    }
    @media screen and (max-width: 1024px) {
        font-size: 25px;
        top: 11%; 
        left: 50%;
    }





`;

const StyledCenter = styled(CenterLogo)`
    position : absolute;
    top: 12%; 

    left : 53%;
    transform: translate(-50%, -50%);
    width : 92%;
`;

const CenterTitle = styled.p`
    position : absolute;

    width: 100%; 
    height: 375px; 

    font-family: 'Irish Grover';    
    text-align: center; 
    font-style: normal;
    font-weight: 400;
    font-size: 200px;
    line-height: 242px;

    color: #ff8a00;
    top: 9%; 
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1280px) {
        font-size: 160px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 120px;
    }
    
`;