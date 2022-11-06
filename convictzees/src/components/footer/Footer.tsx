import styled from "styled-components";
import Facebook from "../customicons/Facebook";
import In from "../customicons/In";
import Instagram from "../customicons/Instagram";
import Twitter from "../customicons/Twitter";
import FooterLists from "../ui/FooterLists";
import TopButton from "../ui/TopButton";


const Footer =() => {
    return(
        <Section>
            <ButtonSection>
                <StyledButton>
                    <TopButton title={"Convictzees"} fontFamily={"IrishGrover-regular, cursive"}/>
                </StyledButton>
                <Contacts>
                    <Facebook/>
                    <In/>
                    <Instagram/>
                    <Twitter/>
                </Contacts>
                <Text>Copyright @2022 StablN. All right reserved</Text>
            </ButtonSection>
            <ListSection>
                <FooterLists main={"Marketplace"} part1={"Explore"} part2={"NFTs"} part3={"Collectibles"} part4={"Virtuallyreally"}/>
                <FooterLists main={"Company"} part1={"About Us"} part2={"Support"} part3={"Careers"} part4={"Newsletter"}/>
                <FooterLists main={"Resources"} part1={"Partners"} part2={"Blogs"} part3={"Help Center"} part4={"Live Action"}/>
            </ListSection>
        </Section>
    );
}

export default Footer

const StyledButton = styled.div`
    font-size :  55px;
`;
const Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17.961px;
    line-height: 22px;
    color: #FFFFFF;

`;

const Contacts = styled.div`
    display : flex;
    gap : 3%;
    margin-top : 9%;
    margin-bottom : 30%;
`;

const ButtonSection = styled.div`
    @media screen and (max-width: 1824px) {
        width : 20%;
    }
    @media screen and (max-width: 1600px) {
        width : 17%;
    }
    @media screen and (max-width: 1440px) {
        width : 15%;
    }
    @media screen and (max-width: 1280px) {
        width : 13%;
    }
    @media screen and (max-width: 1024px) {
        width : 11%;
    }
`;

const Section = styled.div`
    position : absolute;
    width : 100%;
    display : flex;
    top: 92%; 
    padding-left : 4%;




`;
const ListSection = styled.div`
    display : inline-flex;
    margin-left : 15%;

    @media screen and (max-width: 1824px) {
        margin-left : 8%;
    }
    @media screen and (max-width: 1600px) {
        margin-left : 5%;
    }
    @media screen and (max-width: 1440px) {
        margin-left : 1%;
    }
    @media screen and (max-width: 1280px) {
        margin-left : 1%;
    }
    @media screen and (max-width: 1024px) {
        margin-left : 1%;
    }

`;