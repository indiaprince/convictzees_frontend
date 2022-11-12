import styled from "styled-components";
import Title from "../ui/Title";
import Explanation from "../ui/Explanation";
import Step1 from "../customicons/Step1";
import Button from "./Button";
import { useEffect, useState } from "react";
import MintingModal from "../modalComponents/mint/MintingModal";




const Section1 =() => {
    const [isOpen, SetisOpen] = useState(false);
    const openModal = () => {
        SetisOpen(true);
    }
    return (
        <Section>``
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
                </StyledButton>
                <div>{isOpen && <MintingModal setModalShow={SetisOpen}/>}</div>
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

