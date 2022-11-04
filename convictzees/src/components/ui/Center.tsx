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
    left : 55%;
    transform: translate(-50%, -50%);
`;

const CenterTitle = styled.p`
    position : absolute;
    width: 1090px; 
    height: 375px; 
    font-family : IrishGrover-Regular, cursive;
    font-size: 200px; 
    text-align: center; 
    font-weight: 600;
    color: #ff8a00;
    top: 6%; 
    left: 50%;
    transform: translate(-50%, -50%);
`;