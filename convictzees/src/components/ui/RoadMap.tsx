import styled from "styled-components";
import Title from "../ui/Title";
import RoadMapIcon from "../customicons/RoadMapIcon";
import RoadMapImg from "../customicons/RoadMapImg";

const RoadMap =() => {
    return (
        <RoadMapSection>
            <Header>
                <Title first="R" rest="oadMap"/>
                <RoadMapHeader>
                        <RoadMapIcon/>
                </RoadMapHeader>
            </Header>
            <StyledMap/>
        </RoadMapSection>
    );
}

export default RoadMap;
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 40px;
`;
const StyledMap = styled(RoadMapImg)`
    margin-bottom : 2%;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;


`;
const RoadMapSection = styled.div`
    width : 90%;
    position : absolute;
    top: 81%; 
    left : 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1280px) {
        top: 84%; 
    }
    @media screen and (max-width: 1024px) {
        top: 84%; 
    }

`;

const RoadMapHeader = styled.div`
    @media screen and (max-width: 1824px) {
        width : 12%;
    }
    @media screen and (max-width: 1600px) {
        width : 12%;
    }
    @media screen and (max-width: 1440px) {
        width : 12%;
    }
    @media screen and (max-width: 1280px) {
        width : 12%;
    }
    @media screen and (max-width: 1024px) {
        width : 10%;
    }
`;