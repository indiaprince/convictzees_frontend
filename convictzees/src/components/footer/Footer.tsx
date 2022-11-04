import styled from "styled-components";
import Facebook from "../customicons/Facebook";
import In from "../customicons/In";
import Instagram from "../customicons/Instagram";
import Twitter from "../customicons/Twitter";
import Button from "../ui/Button";
import FooterLists from "../ui/FooterLists";


const Footer =() => {
    return(
        <Section>
            <ButtonSection>
                <Button title={"Convictzees"} width={"336px"} height={"73px"} fontSize={"55px"} fontFamily={"IrishGrover-regular, cursive"}/>
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
    margin-top : 8%;
    margin-bottom : 20%;
`;

const ButtonSection = styled.div`

`;

const Section = styled.div`
    position : absolute;
    width : 100%;
    display : flex;
    top: 94%; 
    margin-left : 4%;

`;
const ListSection = styled.div`
    display : flex;
    margin-left : 15%;
`;