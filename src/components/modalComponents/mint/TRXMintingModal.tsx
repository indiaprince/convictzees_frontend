import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import MintIcon from '../../customicons/MintIcon';

import ModalExplanation from './ModalExplanation';
import ModalButton from './ModalButton';

import Title from '../../ui/Title';

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

// Tron

const TronUSDTContractAddress = "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj";
const TronStablinContractAddress = "TEPnBbFA8FpDiWogEf9QPWg1DdBo8jcLKj";
const TronUSDTABI = USDTContract.abi.entrys;
const TronStablinContractABI = TronStablinContract.abi.entrys;

const BaseURI = "ipfs://Qmf59oAi3FTkemAs6CFuqHXyzC32DLp1JA3RLLzFJZdEfK";





const TRXMintingModal = ({ setModalShow }) => {

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

    
const OnClickTRXMinting = async () => {
    const tron =  (window as any).tronWeb;
    let tronUSDTContract = await tron.contract().at(TronUSDTContractAddress);
    console.log(`[Logging] Approve Loading - ${tronUSDTContract}`)

    try {
        let res = await tronUSDTContract.approve(TronStablinContractAddress, (10 * Math.pow(10,6) + 10 *Math.pow(10,4))).send({
            feeLimit:100_000_000,
            callValue:0,
            shouldPollResponse:true
        });
        console.log(`[Logging] Approve Success`);
    } catch (error) {
        console.log(error);
    }

    let tronStablinContract = await tron.contract().at(TronStablinContractAddress);
    
    console.log(`[Logging] Minting Loading`);
    try {
        await tronStablinContract.mintWithTenUSD(TronUSDTContractAddress).send({
            feeLimit: 100000000
        }).then(output => {
            console.log('[Logging] transferFrom hash:', output, '\n');
        });
        console.log(`[Logging] Minting Success`);
    } catch (error) {
        console.log(error);
    }

}
    return createPortal(
        <ModalOverlay onClick={() => setModalShow(false)}>
        <ModalBg>
            <LeftModalBox><Title first={'C'} rest={'hoose your Convictzee'}/></LeftModalBox>
            <CenterModalBox><StyledMinIcon/></CenterModalBox>
            <ModalBox>
                <ModalExplanation body1={'Name: Kyle'} body2={'Crime: Ton of Spam'} body3={'Strength: Basketball'} body4={'Bounty: $10 USDT'}/>
                {true ? (
                <ModalButton title="BREAK HIM OUT" fontFamily="Impact" onClick={OnClickTRXMinting}/>):
                (
                <ModalButton title="BREAKING" fontFamily="Impact" onClick={()=>{}}/>)
                }
            </ModalBox>
        </ModalBg>
        </ModalOverlay>,
    document.getElementById('modal')
  );
};

export default TRXMintingModal;


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
