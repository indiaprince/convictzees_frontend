import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import MintIcon from '../../customicons/MintIcon';

import ModalExplanation from './ModalExplanation';
import ModalButton from './ModalButton';

import Title from '../../ui/Title';
import { ethers } from 'ethers';
import usdcContract from "../../../abi/USDCContract.json";


const ModalBg = styled.div`
    display: inline-flex;


    @media screen and (max-width: 1824px) {
        top: 270%;
    }
    @media screen and (max-width: 1600px) {
        top: 230%;
    }
    @media screen and (max-width: 1440px) {
        top: 210%;
    }
    @media screen and (max-width: 1280px) {
        top: 170%;
    }
    @media screen and (max-width: 1024px) {
        top: 150%;
        height: 40%;

    }



    align-items: center;
    justify-content: center;
    
    width: 90%;
    height: 50%;

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
const contractAddress = "0xFEca406dA9727A25E71e732F9961F680059eF1F9";
const ABI = usdcContract.abi;


const contract = async () => { 
    let provider = (window as any).ethereum;
    const e = new ethers.providers.Web3Provider(provider);
    const signer = e.getSigner();
    const Contract = new ethers.Contract(contractAddress, ABI, signer);
    let txn = Contract.approve("0x6F2b010B806C95A7BBAb63862C4e67155B5D1E5D",ethers.utils.parseEther("0.1"));
    console.log(txn)
}

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

const Minting = () => {
    contract();

    setModalShow(false);
}
    return createPortal(
        <ModalOverlay onClick={() => setModalShow(false)}>
        <ModalBg>
            <LeftModalBox><Title first={'C'} rest={'hoose your Convictzee'}/></LeftModalBox>
            <CenterModalBox><StyledMinIcon/></CenterModalBox>
            <ModalBox>
                <ModalExplanation body1={'Name: Kyle'} body2={'Crime: Ton of Spam'} body3={'Strength: Basketball'} body4={'Bounty: $10 USDC'}/>
                <ModalButton title="BREAK HIM OUT" fontFamily="Impact" onClick={Minting}/>
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
