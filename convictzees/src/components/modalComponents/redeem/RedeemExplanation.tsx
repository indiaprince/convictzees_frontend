import styled from "styled-components";



interface IExplainBody {
    body1 : string;
    body2 : string;
}
const RedeemExplanation =(props : IExplainBody) => {
    return (
        <ExplanationP>
            <ExplanationSpan>{props.body1}</ExplanationSpan>
            <br/>
            <ExplanationSpan>{props.body2}</ExplanationSpan>
        </ExplanationP>
    );
}

const ExplanationP = styled.p`
    font-family : Imprima-Regular;
    line-height: 60px;
    letter-spacing: 0.06em;
    font-size: 40px; 
    color: #fff;
    
    @media screen and (max-width: 1824px) {
        font-size: 36px;
    }
    @media screen and (max-width: 1600px) {
        font-size: 32px;
    }
    @media screen and (max-width: 1440px) {
        font-size: 28px;
    }
    @media screen and (max-width: 1280px) {
        font-size: 24px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 20px;
    }

`;
const ExplanationSpan = styled.span`
`;

export default RedeemExplanation;