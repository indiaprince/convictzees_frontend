import styled from "styled-components";
import TopButton from "../ui/TopButton";

import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../../connectors/connectors";

import { useEffect, useState } from "react";
import { getErrorMessage } from "../../helper/getErrorMessage";
import { switchChains } from "../../helper/walletHelpers";

const Header =() => {
    const {account, active, activate, deactivate } = useWeb3React();
    const accountFormatted = account?.substring(0, 6) + "..."

    const onClickConnect = () => {
        console.log(injected);
        activate(injected, async (error:Error) => {
            console.log(getErrorMessage(error));
            switchChains();
        })
    }
    const onClickDisconnect = () => {
        deactivate();
    }

    if(active) {
        return(
            <NavBar>
                <StyledButton>
                    <TopButton  title="Convictzees"  fontFamily="IrishGrover-Regular, cursive"/>
                </StyledButton>
                <NavLink>
                    <Link>EXPLORE</Link>
                    <Link>MARKETPLACE</Link>
                    <Link>REDEEM</Link>
                    <FirstDisplay><Link>ROADMAP</Link></FirstDisplay>
                    <ConnectButton onClick={onClickDisconnect}>
                    <ConnectButtonText>
                        {accountFormatted}
                    </ConnectButtonText>
            </ConnectButton>  
                </NavLink>
            </NavBar>
            );
    }
    else
    {
        return (
            <NavBar>
            <StyledButton>
                <TopButton  title="Convictzees"  fontFamily="IrishGrover-Regular, cursive"/>
            </StyledButton>
            <NavLink>
            <Link>EXPLORE</Link>
            <Link>MARKETPLACE</Link>
            <Link>REDEEM</Link>
            <FirstDisplay><Link>ROADMAP</Link></FirstDisplay>
            <ConnectButton onClick={onClickConnect}>
                    <ConnectButtonText>
                        CONNECT WALLET
                    </ConnectButtonText>
            </ConnectButton>
        </NavLink>
    </NavBar>  
        );
    }
}

export default Header

const FirstDisplay = styled.div`
    @media screen and (max-width: 1024px) {
        display : none;
    }
`;

const StyledButton = styled.div`
    margin-left: 6%;
    width : 18%;
    @media screen and (max-width: 1824px) {
        width : 18%;
    }
    @media screen and (max-width: 1600px) {
        width : 17%;
    }
    @media screen and (max-width: 1440px) {
        width : 15%;
    }
    @media screen and (max-width: 1280px) {
        width : 13%;
    }
    @media screen and (max-width: 1024px) {
        width : 11%;
    }
`;

const NavBar = styled.nav`
    width : 100%;
    top: 1.2%;
    position: absolute; 
    display: inline-flex;
    align-items: center;
    
  `;
const NavLink = styled.div`
    display: flex; 
    float: right;
    gap:6%;
    display: inline-flex;
    align-items: center;
    margin-left : 10.3%;
    width : 100%;
    
`;
const Link = styled.p`
    lex-grow: 0; 
    flex-shrink: 0; 

    font-family : Fresca;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: -0.06em;

    
    text-align: left; 
    text-transform: uppercase; 
    color: #fff;

    @media screen and (max-width: 1824px) {
        font-size: 32px;
    }
    @media screen and (max-width: 1600px) {
        font-size: 28px;
    }
    @media screen and (max-width: 1440px) {
        font-size: 26px;
    }
    @media screen and (max-width: 1280px) {
        font-size: 24px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 22px;
    }
`;

const ConnectButton = styled.button`
    border-radius: 35px; 
    background: #ff8a00; 
    border-width: 5px; 
    border-color: #ff8a00;
    height : 60px;
    @media screen and (max-width: 1824px) {
        width : 233px;
        height: 55px;
    }
    @media screen and (max-width: 1600px) {
        width : 190px;
        height: 50px;
    }
    @media screen and (max-width: 1440px) {
        width : 170px;
        height: 45px;
    }
    @media screen and (max-width: 1280px) {
        width : 150px;
        height: 40px;
    }
    @media screen and (max-width: 1024px) {
        width : 140px;
        height: 35px;
    }


`;

const ConnectButtonText = styled.p`
    width : inherited;
    height: inherited;

    font-family : Impact;
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    text-transform: uppercase;
    text-align: center; 
    margin:0;
    color: #FFFFFF;

    @media screen and (max-width: 1824px) {
        font-size : 29px;
    }
    @media screen and (max-width: 1600px) {
        font-size : 19px;
    }
    @media screen and (max-width: 1440px) {
        font-size : 18px;
    }
    @media screen and (max-width: 1280px) {
        font-size : 14px;
    }
    @media screen and (max-width: 1024px) {
        font-size : 14px;
    }
`;