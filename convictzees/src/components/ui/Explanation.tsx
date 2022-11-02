import styled from "styled-components";



interface IExplainBody {
    body1 : string;
    body2 : string;
}
const Explanation =(props : IExplainBody) => {
    return (
        <ExplanationP>
            <ExplanationSpan>{props.body1}</ExplanationSpan>
            <br/>
            <ExplanationSpan>{props.body2}</ExplanationSpan>
        </ExplanationP>

    );
}

const ExplanationP = styled.p`
    font-size: 40px; 
    color: #fff;"
`;
const ExplanationSpan = styled.span`
`;

export default Explanation;
