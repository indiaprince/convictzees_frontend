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
            <StyledMap/>
        </RoadMapSection>
    );
}

export default RoadMap;

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
    top: 83%; 
    left : 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;



`;

const RoadMapHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom : 4%;
    gap : 40px;
`;