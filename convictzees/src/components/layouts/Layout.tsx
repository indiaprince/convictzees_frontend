import React from "react";
import styled from "styled-components";
import Background from "../customicons/Bg"
import Footer from "../footer/Footer";
import Header from "../header/Header";
import About from "../ui/About";
import Center from "../ui/Center";
import Diagram from "../ui/Diagram";
import RoadMap from "../ui/RoadMap";
import Section1 from "../ui/Section1";
import Section2 from "../ui/Section2";
import Title from "../ui/Title";
const Layout = (props : {children: React.ReactNode}) => {
    return (
            <ImageContainer>
                <Background/>
                <Header/>
                <Center/>
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
const Space = styled.div`
    width : 30px;
`;
const ImageContainer = styled.div`
    position : relative;
    
    overflow : auto;
`;

const TextSection = styled.div`
    position : absolute;
    display : inline-flex;
    top:68%;
    left : 50%;
    transform: translate(-50%, -50%);
`;
const Text = styled.div`
    
    `;