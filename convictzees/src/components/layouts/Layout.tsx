import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import About from "../ui/About";
import Center from "../ui/Center";
import Diagram from "../ui/Diagram";
import RoadMap from "../ui/RoadMap";
import Section1 from "../ui/Section1";
import Section2 from "../ui/Section2";

  
  
const Layout = (props : {children: React.ReactNode}) => {
    return (
            <ImageContainer>
                <Background/>
                <Header/>
                <StyledCenter/>
                <About/>
                <Diagram/>
                <Section1/>
                <Section2/>
                <RoadMap/>
                <Footer/>
            <main>{props.children}</main>
            </ImageContainer>
        

    );
}

export default Layout

const Background = styled.div`
    position : absolute;
    background-image: url(${"/Background.svg"});
    background-size: cover;

    background-position:center center;    
    height: 100%;
    width: 100%;
    text-align: center;

`;
const StyledCenter = styled(Center)`
`;


const ImageContainer = styled.div`

    width: 100%;
    position: relative;
    min-height: 650vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1824px) {
        min-height: 650vh;
    }
    @media screen and (max-width: 1600px) {
        min-height: 600vh;
    }
    @media screen and (max-width: 1440px) {
        min-height: 550vh;
    }
    @media screen and (max-width: 1280px) {
        min-height: 500vh;
    }
    @media screen and (max-width: 1024px) {
        min-height: 480vh;
    }


    `;
