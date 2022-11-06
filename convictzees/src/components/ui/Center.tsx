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
    top: 12%; 



    left : 53%;
    transform: translate(-50%, -50%);
    width : 92%;
`;

const CenterTitle = styled.p`
    position : absolute;

    width: 100%; 
    height: 375px; 

    font-family : IrishGrover-Regular, cursive;
    text-align: center; 
    font-style: normal;
    font-weight: 800;
    font-size: 200px;
    line-height: 242px;

    color: #ff8a00;
    top: 9%; 
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1280px) {
        font-size: 160px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 120px;
    }
    
`;