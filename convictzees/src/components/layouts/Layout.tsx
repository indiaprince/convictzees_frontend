import React from "react";
import styled from "styled-components";
import Background from "../customicons/Bg"
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
                <Center/>
                <About/>
                <Diagram/>
                <Section1/>
                <Section2/>
                <RoadMap/>
            <main>{props.children}</main>
            </ImageContainer>
        

    );
}

export default Layout

const ImageContainer = styled.div`
    position : relative;
`;