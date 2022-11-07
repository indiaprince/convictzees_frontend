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
import Image from 'next/image'
import background from '../customicons/background.svg';
  
const Layout = (props : {children: React.ReactNode}) => {
    return (
            <ImageContainer>
                <Image
                    src={background}
                    alt="Unable to Load Background"
                    layout="responsive" 
                />
                <Center/>
                <Header/>
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

const ImageContainer = styled.div`

    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    `;
