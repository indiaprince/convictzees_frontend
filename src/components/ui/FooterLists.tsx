import styled from "styled-components";



interface IFooterList {
    main : string;
    part1 : string;
    part2 : string;
    part3 : string;
    part4 : string;
}

const FooterLists = (props : IFooterList) =>{
    return (
        <Section>
            <Heading>{props.main}</Heading>
            <Part>{props.part1}</Part>
            <Part>{props.part2}</Part>
            <Part>{props.part3}</Part>
            <Part>{props.part4}</Part>
        </Section>
    );
}


export default FooterLists;
const Section = styled.div`
    color: #FFFFFF;
    margin-left: 30%;
    margin-right: 30%;
    height : 100%;
    justify-content : space-between;
    @media screen and (max-width: 1824px) {
        margin-left: 32%;
        margin-right: 32%;
    }
    @media screen and (max-width: 1600px) {
        margin-left: 34%;
        margin-right: 34%;
    }
    @media screen and (max-width: 1440px) {
        margin-left: 38%;
        margin-right: 38%;
    }
    @media screen and (max-width: 1280px) {
        margin-left: 36%;
        margin-right: 28%;
    }
    @media screen and (max-width: 1024px) {
        margin-left: 34%;
        margin-right: 24%;
    }
`;

const Part = styled.p`
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    margin-bottom : 45px;
    @media screen and (max-width: 1824px) {
        font-size: 16px;
    }
    @media screen and (max-width: 1600px) {
        font-size: 16px;

    }
    @media screen and (max-width: 1440px) {
        font-size: 16px;

    }
    @media screen and (max-width: 1280px) {
        font-size: 14px;
        margin-bottom : 25px;

    }
    @media screen and (max-width: 1024px) {
        font-size: 14px;
        margin-bottom : 25px;

    }
`;

const Heading = styled.p`
    height : 40px;
    margin : 0;
    margin-bottom : 10%;
    font-family: Exo;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 22px;
    @media screen and (max-width: 1824px) {
        font-size: 30px;
    }
    @media screen and (max-width: 1600px) {
        font-size: 26px;

    }
    @media screen and (max-width: 1440px) {
        font-size: 24px;

    }
    @media screen and (max-width: 1280px) {
        font-size: 22px;

    }
    @media screen and (max-width: 1024px) {
        font-size: 20px;

    }

`;