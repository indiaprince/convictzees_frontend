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
                    body2 = "Convictzees are the world first stable NFTs which retain its value permentantly"/>
                <Button title="MINT" width="189px" height="79px" fontSize="48px"></Button>
            </TextSection>
            <ImageSection>
                <Step1/>
            </ImageSection>
        </Section>
    );
}

export default Section1;


const ImageSection = styled.div`
`;
const TextSection = styled.div`
    width : 1100px;
    

`;
const Section = styled.div`
    position : absolute;
    display: inline-flex;
    top: 35%; 
    justify-content: center;
    align-items: center;
    margin-left : 5%;

`;

