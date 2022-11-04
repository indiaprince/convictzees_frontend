import styled from "styled-components";
import Title from "../ui/Title";
import RoadMapIcon from "../customicons/RoadMapIcon";
import RoadMapImg from "../customicons/RoadMapImg";

const RoadMap =() => {
    return (
        <RoadMapSection>
            <RoadMapHeader>
                <Title first="R" rest="oadMap"/>
                <RoadMapIcon/>
            </RoadMapHeader>
            <RoadMapImg/>
        </RoadMapSection>
    );
}

export default RoadMap;


const RoadMapSection = styled.div`
    position : absolute;
    top: 85%; 
    left : 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
`;

const RoadMapHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom : 150px;
    margin-left : 10%;
    gap : 50px;
`;