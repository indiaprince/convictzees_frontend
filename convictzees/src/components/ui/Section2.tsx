import styled from "styled-components";
import Title from "../ui/Title";
import Explanation from "../ui/Explanation";
import Step2 from "../customicons/Step2";
import Button from "./Button";
import RedeemModal from "../modalComponents/redeem/RedeemModal";
import { useState } from "react";
import TRXRedeemModal from "../modalComponents/redeem/TRXRedeemModal";

interface Propstype {
    isTron : boolean;
}

const Section2 =(props : Propstype) => {

    const [isOpen, SetisOpen] = useState(false);
    const openModal = () => {
        SetisOpen(true);
    }
    
    return (
        <Section>
            <ImageSection>
                <Step2/>
            </ImageSection>
            <TextSection>
                <Title first="T" rest="hrow your Convictzees Back in Jail"/>
                <Explanation 
                    body1="Feeling guilty?"
                    body2="Then take your Convictzees back in jail"
                    body3="And receive the bounty on his head!"
                    body4="" body5={""}/>
                <StyledButton>
                    <Button title="REDEEM" fontFamily="Impact" onClick={openModal}></Button>
                </StyledButton>
                {
                    props.isTron ? 
                    <div>{isOpen && <TRXRedeemModal setModalShow={SetisOpen}/>}</div> :
                    <div>{isOpen && <RedeemModal setModalShow={SetisOpen}/>}</div>                
                }

            </TextSection>
        </Section>
    );
}

export default Section2;

const StyledButton = styled.div`
    margin-top : 9%;
    font-size :  48px;
`;
const ImageSection = styled.div`
    width : 30%;
`;
const TextSection = styled.div`
    padding-left: 5%;
    width : 60%;
    padding-right : 5%;
`;
const Section = styled.div`
    width : 100%;
    position : absolute;
    display: flex;
    top: 58%; 
    justify-content: center;
    align-items: center;

`;
