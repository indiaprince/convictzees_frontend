import CoinIcon from "../customicons/CoinIcon";
import ExchangeIcon from "../customicons/ExchangeIcon";
import NFTIcon from "../customicons/NFTIcon";
import styled from "styled-components";
import Button from "./Button";

const Diagram =() => {
    return(
        <SectionCol>
            <SectionRow>
                <CoinIcon/>
                <ExchangeIcon/>
                <NFTIcon/>
            </SectionRow>
            <Button title="FIND OUT MORE" width="376px" height="79px" fontSize="48px"/>
        </SectionCol>
    );
}

export default Diagram


const SectionCol = styled.div`
    position : absolute;
    top: 30%; 
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SectionRow = styled.div`
    display : inline-flex;
    align-item : center;
    justify-content : center;
    gap : 15%;
    
`;
