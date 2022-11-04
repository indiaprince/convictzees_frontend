import styled from "styled-components";
import Title from "../ui/Title";
import Explanation from "../ui/Explanation";
import Step2 from "../customicons/Step2";
import Button from "./Button";



const Section2 =() => {
    return (
        <Section>
            <ImageSection>
                <Step2/>
            </ImageSection>
            <TextSection>
                <Title first="T" rest="hrow your Convictzees Back in Jail"/>
                <Explanation 
                    body1 = "Feeling guilty?"
                    body2 = "Then take your Convictzees back in jail"
                    body3 = "And receive the bounty on his head!"
                    body4 = ""/>
                <Button title="REDEEM" width="189px" height="79px" fontSize="48px" fontFamily="Impact"></Button>
            </TextSection>
        </Section>
    );
}

export default Section2;


const ImageSection = styled.div`
`;
const TextSection = styled.div`
    width : 1150px;
    margin-left : 5%;

`;
const Section = styled.div`
    position : absolute;
    display: flex;
    top: 53%; 
    justify-content: center;
    align-items: start;
    gap : 100px;
    margin-left : 5%;
`;
