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
    height : 300px;
`;

const Part = styled.p`
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom : 25px;


`;

const Heading = styled.p`
    margin-bottom : 40px;
    font-family: Exo;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 22px;

`;