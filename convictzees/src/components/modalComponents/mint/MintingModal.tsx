import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import MintIcon from '../../customicons/MintIcon';

import ModalExplanation from './ModalExplanation';
import ModalButton from './ModalButton';

import Title from '../../ui/Title';
import { ethers } from 'ethers';
import USDCContract from "../../../abi/USDCContract.json";
import StablinContract from "../../../abi/StablinContract.json";


import USDTContract from "../../../abi/USDTContract.json";
import TronStablinContract from "../../../abi/TronStablinContract.json";

const ModalBg = styled.div`
    display: inline-flex;
    @media screen and (max-width: 1824px) {
        top: 270%;
        height: 60%;

    }
    @media screen and (max-width: 1600px) {
        top: 230%;
        height: 55%;

    }
    @media screen and (max-width: 1440px) {
        top: 210%;
        height: 50%;
    }
    @media screen and (max-width: 1280px) {
        top: 170%;
        height: 50%;

    }
    @media screen and (max-width: 1024px) {
        top: 150%;
        height: 40%;

    }



    align-items: center;
    justify-content: center;
    
    width: 90%;
    height: 60%;

    box-sizing: border-box;
    border: 10px solid #FF8A00;
    border-radius: 185px;

    background: #303030;
    box-shadow: inset 0px 17px 39px rgba(0, 0, 0, 0.25);

  `;
const LeftModalBox = styled.div`
    width : 40%;
    padding-left : 5%;
`;
const CenterModalBox = styled.div`
    width : 35%;
    height : 100%;
    justify-content : center;
    align-items : center;
`;
const ModalBox = styled.div`
    width : 30%;
    justify-content : start;
`;
const StyledMinIcon = styled(MintIcon)`
    width : 80%;
    height : inherit;
`;

// Polygon
const USDCcontractAddress = "0xFEca406dA9727A25E71e732F9961F680059eF1F9";
const StablinContractAddress = "0x6F2b010B806C95A7BBAb63862C4e67155B5D1E5D";
const USDCABI = USDCContract.abi;
const StablinContractABI = StablinContract.abi;


// Tron

const TronUSDTContractAddress = "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj";
const TronStablinContractAddress = "TSKUFMwADjWgkANhyy8hwGF6EAwDnhCzwS";
const TronUSDTABI = USDTContract.abi.entrys;
const TronStablinContractABI = TronStablinContract.abi.entrys;

const BaseURI = "ipfs://Qmf59oAi3FTkemAs6CFuqHXyzC32DLp1JA3RLLzFJZdEfK";



const MintingModal = ({ setModalShow }) => {

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);

    
const Mint = async () => {
    let provider = (window as any).ethereum;

    const e = new ethers.providers.Web3Provider(provider);
    const Approvesigner = e.getSigner();
    const USDCcontract = new ethers.Contract(USDCcontractAddress, USDCABI, Approvesigner);
    
    try {
        let txn = await USDCcontract.approve(StablinContractAddress, (10 * Math.pow(10,6) + 10 *Math.pow(10,4)) );
        console.log(`[Logging] Approve Loading - ${txn.hash}`)
        await txn.wait()
        console.log(`[Logging] Approve Success - ${txn.hash}`)
    }
    catch (e) { console.log(e); }	
    
    const Mintsigner = e.getSigner();
    const Stablincontract = new ethers.Contract(StablinContractAddress, StablinContractABI,Mintsigner);
    try {
        let txn = await Stablincontract.mintWithTenUSD(USDCcontractAddress);
        console.log(`[Logging] Minting Loading - ${txn.hash}`)
        await txn.wait()
        console.log(`[Logging] Minting Success - ${txn.hash}`)
    }
    catch (e) { console.log(e); }	
    
}
const OnClickMinting = async () => {
    Mint();
}
    return createPortal(
        <ModalOverlay onClick={() => setModalShow(false)}>
        <ModalBg>
            <LeftModalBox><Title first={'C'} rest={'hoose your Convictzee'}/></LeftModalBox>
            <CenterModalBox><StyledMinIcon/></CenterModalBox>
            <ModalBox>
                <ModalExplanation body1={'Name: Kyle'} body2={'Crime: Ton of Spam'} body3={'Strength: Basketball'} body4={'Bounty: $10 USDC'}/>
                {true ? (
                <ModalButton title="BREAK HIM OUT" fontFamily="Impact" onClick={OnClickMinting}/>):
                (
                <ModalButton title="BREAKING" fontFamily="Impact" onClick={()=>{}}/>)
                }
            </ModalBox>
        </ModalBg>
        </ModalOverlay>,
    document.getElementById('modal')
  );
};

export default MintingModal;


const ModalOverlay = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #ffffffe2;
`
