import styled from "styled-components";



interface IExplainBody {
    body1 : string;
    body2 : string;
    body3 : string;
    body4 : string;

}
const Explanation =(props : IExplainBody) => {
    return (
        <ExplanationP>
            <ExplanationSpan>{props.body1}</ExplanationSpan>
            <br/>
            <ExplanationSpan>{props.body2}</ExplanationSpan>
            <br/>
            <ExplanationSpan>{props.body3}</ExplanationSpan>
            <br/>
            <ExplanationSpan>{props.body4}</ExplanationSpan>
        </ExplanationP>

    );
}

const ExplanationP = styled.p`
    font-family : Imprima-Regular;
    line-height: 60px;
    letter-spacing: 0.06em;
    font-size: 40px; 
    color: #fff;

`;
const ExplanationSpan = styled.span`
`;

export default Explanation;
