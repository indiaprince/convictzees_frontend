import CenterLogo from "../customicons/CenterLogo";
import styled from "styled-components";

const Center =() => {
    return(
        <div>
        <StyledCenter/>
        <CenterTitle>Convictzees</CenterTitle>
        </div>
    );
}

export default Center



const StyledCenter = styled(CenterLogo)`
    position : absolute;
    top: 10%; 
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CenterTitle = styled.p`
    position : absolute;
    width: 1090px; 
    height: 375px; 
    font-size: 200px; 
    text-align: left; 
    color: #ff8a00;
    top: 7%; 
    left: 50%;
    transform: translate(-50%, -50%);
`;