import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Image from 'next/image'
import background from '../customicons/background.svg';
import TronHeader from "../header/TronHeader";
  
const TronLayout = (props : {children: React.ReactNode}) => {
    console.log("[Logging] : Tron");
    return (
            <ImageContainer>
                <Image
                    src={background}
                    alt="Unable to Load Background"
                    layout="responsive" 
                />
                <main>{props.children}</main>
                <TronHeader/>
                <Footer/>
            </ImageContainer>
    );
}

export default TronLayout

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
`;
