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
                    body1 = "Put your Convictzees in jail and get the reward"
                    body2 = "As you redeem your Stable NFT, you can claim your money back"/>
                <Button title="REDEEM" width="189px" height="79px" fontSize="48px"></Button>
            </TextSection>
        </Section>
    );
}

export default Section2;


const ImageSection = styled.div`
`;
const TextSection = styled.div`
    width : 1100px;
    margin-left : 5%;

`;
const Section = styled.div`
    position : absolute;
    display: flex;
    top: 50%; 
    justify-content: center;
    align-items: start;
    gap : 100px;
    margin-left : 5%;
`;
