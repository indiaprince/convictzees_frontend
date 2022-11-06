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
        margin-left: 30%;
        margin-right: 30%;
    }
    @media screen and (max-width: 1600px) {
        margin-left: 26%;
        margin-right: 26%;
    }
    @media screen and (max-width: 1440px) {
        margin-left: 24%;
        margin-right: 24%;
    }
    @media screen and (max-width: 1280px) {
        margin-left: 18%;
        margin-right: 18%;
    }
    @media screen and (max-width: 1024px) {
        margin-left: 15%;
        margin-right: 15%;
    }
`;

const Part = styled.p`
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    margin-bottom : 45px;

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


`;