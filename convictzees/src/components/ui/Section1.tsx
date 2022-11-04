import styled from "styled-components";
import Title from "../ui/Title";
import Explanation from "../ui/Explanation";
import Step1 from "../customicons/Step1";
import Button from "./Button";




const Section1 =() => {
    return (
        <Section>
            <TextSection>
                <Title first="P" rest="ick up your Convictzees"/>
                <Explanation 
                    body1 = "Help your Convictzees to break out the prison"
                    body2 = "And become the convict yourself!"
                    body3 = "Your Convictzee will pay you a tribute every week"
                    body4 = ""/>
                <Button title="MINT" width="189px" height="79px" fontSize="48px" fontFamily="Impact"></Button>
            </TextSection>
            <Step1/>
        </Section>
    );
}

export default Section1;


const TextSection = styled.div`
    width : 1150px;
`;
const Section = styled.div`
    position : absolute;
    display: inline-flex;
    top: 38%; 
    justify-content: center;
    align-items: center;
    margin-left : 5%;

`;

