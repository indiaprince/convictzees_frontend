import styled from "styled-components";
import Title from "../ui/Title";
import Explanation from "../ui/Explanation";
import Step1 from "../customicons/Step1";
import Button from "./Button";
import { useEffect, useState } from "react";
import MintingModal from "../modalComponents/mint/MintingModal";
import TRXMintingModal from "../modalComponents/mint/TRXMintingModal";
import InterestButton from "./InterestButton";

import USDCContract from "../../abi/USDCContract.json";
import StablinContract from "../../abi/StablinContract.json";
interface proptype {
    isTron : boolean;
}

const Section1 = (props : proptype) => {
    const [isOpen, SetisOpen] = useState(false);
    const openModal = () => {
        SetisOpen(true);
    }



    // Interest

    const USDCcontractAddress = "0xFEca406dA9727A25E71e732F9961F680059eF1F9";
    const StablinContractAddress = "0x6F2b010B806C95A7BBAb63862C4e67155B5D1E5D";
    const USDCABI = USDCContract.abi;
    const StablinContractABI = StablinContract.abi;

    const TronUSDTContractAddress = "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj";
    const TronStablinContractAddress = "TEPnBbFA8FpDiWogEf9QPWg1DdBo8jcLKj";

    const getTronInterest = async () =>{
        const tron =  (window as any).tronWeb;
        let tronStablinContract = await tron.contract().at(TronStablinContractAddress);
        console.log(`[Logging] GetInterest Loading - ${tronStablinContract}`);
        try {
            
            let res = await tronStablinContract.feeRedeem().send({
                feeLimit:100_000_000,
                callValue:0,
                shouldPollResponse:true
            }).then(output => {
                console.log('[Logging] transferFrom hash:', output, '\n');
            });
            console.log(`[Logging] GetInterest Success`);
        } catch (error) {
            console.log(error);
        }
    }
    const getInterest = () =>{

    }
    //
    console.log(props.isTron);
    return (
        <Section>
            <TextSection>
                <Title first="P" rest="ick up your Convictzees"/>
                <Explanation 
                    body1="Help your Convictzees to break out the prison"
                    body2="And become the convict yourself!"
                    body3="Your Convictzee will pay you a tribute every week"
                    body4="" 
                    body5={""}/>
                <StyledButton>
                    <Button title="MINT" fontFamily="Impact" onClick={openModal}></Button>
                    {
                    props.isTron ? 
                    <InterestButton title="GET INTEREST" fontFamily="Impact" onClick={getTronInterest}></InterestButton> :
                    <InterestButton title="GET INTEREST" fontFamily="Impact" onClick={getInterest}></InterestButton> 
                    }
                </StyledButton>
                {
                    props.isTron ? 
                    <div>{isOpen && <TRXMintingModal setModalShow={SetisOpen}/>}</div>:
                    <div>{isOpen && <MintingModal setModalShow={SetisOpen}/>}</div>
                }
                </TextSection>
            <ImageSection/>
        </Section>
    );
}

export default Section1;


const StyledButton = styled.div`
    margin-top : 8%;
    font-size :  48px;
`;

const ImageSection = styled(Step1)`
    display : flex;
    margin-right : 6%;
    width : 40%;
`;

const TextSection = styled.div`
    width : 60%;
`;
const Section = styled.div`
    width : 100%;
    position : absolute;
    display: inline-flex;
    top: 44%; 
    justify-content: center;
    align-items: center;
    padding-left:5%;
`;
