import styled from "styled-components";
import Title from "./Title";
import Explanation from "./Explanation";

const About =() => {
    return(
        <AboutSection>
            <Title first="A" rest="bout Convictzees"/>
            <Explanation 
            body1 = "Convictzees is the first stable NFT collection made by Stabln."
            body2 = "Each convictzee is locked up for a terrible crime commited in the crypto world."
            body3 = "From rug pulls to murder Satoshi Nakamoto!"
            body4 = "Convictzees are waiting for your help to break out of prison."
            />
        </AboutSection>
    );
}

export default About



const AboutSection = styled.div`
    position : absolute;
    top: 23%; 
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%; 
    height: 220px; 
    text-align : center;




`;