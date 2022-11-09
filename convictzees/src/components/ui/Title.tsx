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
    font-family : Impact;
    font-size: 96px; 
    margin : 0;
    letter-spacing: 0.06em;
    display : inline-flex;

    @media screen and (max-width: 1824px) {
        font-size: 72px;
    }
    @media screen and (max-width: 1600px) {
        font-size: 62px;
    }
    @media screen and (max-width: 1440px) {
        font-size: 56px;
    }
    @media screen and (max-width: 1280px) {
        font-size: 48px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 42px;
    }
`;

const TitleSpan1 = styled.span`
    color: #ff8a00;
`;

const TitleSpan2 = styled.span`
    color: #fff;
`;