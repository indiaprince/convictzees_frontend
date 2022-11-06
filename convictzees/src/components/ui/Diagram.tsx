import CoinIcon from "../customicons/CoinIcon";
import ExchangeIcon from "../customicons/ExchangeIcon";
import NFTIcon from "../customicons/NFTIcon";
import styled from "styled-components";
import DiagramButton from "./DiagramButton";

const Diagram =() => {
    return(
        <SectionCol>
            <SectionRow>
                <CoinIcon/>
                <ExchangeIcon/>
                <NFTIcon/>
            </SectionRow>
            <Center>
                <DiagramButton title="FIND OUT MORE" fontFamily="Impact"/>
            </Center>
        </SectionCol>
    );
}

export default Diagram

const Center = styled.div`
    display : flex;
    justify-content : center;
    margin-top : 1%;    

`;

const SectionCol = styled.div`
    width : 100%;
    position : absolute;
    top: 33%; 
    left: 50%;
    transform: translate(-50%, -50%);


    @media screen and (max-width: 1824px) {
        width : 80%;
    }
    @media screen and (max-width: 1600px) {
        width : 75%;
    }
    @media screen and (max-width: 1440px) {
        width : 70%;
    }
    @media screen and (max-width: 1280px) {
        width : 65%;
    }
    @media screen and (max-width: 1024px) {
        width : 60%;
    }
`;

const SectionRow = styled.div`
    width : 100%;
    display : inline-flex;
    align-items : center;
    justify-content : center;
    margin-top: 7%;
    gap: 6%;
    
`;
