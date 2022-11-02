import styled from "styled-components";

interface ITitle {
    first : string;
    rest : string;
}

const Title =(props : ITitle) => {
    return (
        <TitleP>
            <TitleSpan1>{props.first}</TitleSpan1>
            <TitleSpan2>{props.rest}</TitleSpan2>
        </TitleP>

    );
}

export default Title;

const TitleP = styled.p`
    font-size: 96px; 
    margin : 0;

`;
const TitleSpan1 = styled.span`
    color: #ff8a00;
`;
const TitleSpan2 = styled.span`
    color: #fff;
`;