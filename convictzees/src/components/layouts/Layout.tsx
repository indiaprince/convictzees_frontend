import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
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
                <main>{props.children}</main>
                <Header/>
                <Footer/>
            </ImageContainer>
    );
}

export default Layout

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
`;
