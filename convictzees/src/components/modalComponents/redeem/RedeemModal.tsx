import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import RedeemIcon from '../../customicons/RedeemIcon';

import ModalExplanation from './ModalExplanation';
import ModalButton from './ModalButton';

import Title from '../../ui/Title';
import CycleIcon from '../../customicons/CycleIcon';
import MoneyBagIcon from '../../customicons/MoneyBagIcon';
import RedeemExplanation from './RedeemExplanation';

import USDCContract from "../../../abi/USDCContract.json";
import StablinContract from "../../../abi/StablinContract.json";
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

const ModalBg = styled.div`
    display: inline-flex;

    @media screen and (max-width: 1824px) {
        top: 350%;
    }
    @media screen and (max-width: 1600px) {
        top: 320%;
    }
    @media screen and (max-width: 1440px) {
        top: 300%;
    }
    @media screen and (max-width: 1280px) {
        top: 230%;
        height: 50%;

    }
    @media screen and (max-width: 1024px) {
        top: 205%;
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
    padding-left : 10%;
`;
const CenterModalBox = styled.div`
    width : 25%;
    height : 80%;
    display : center;
    text-align : center;
`;
const ModalBox = styled.div`
    width : 40%;
    justify-content : start;
`;
const StyledRedeemIcon = styled(RedeemIcon)`
    width : 70%;
    height : inherit;
`;

const Row = styled.div`
    display : inline-flex;
    align-items : flex-end;
    margin-bottom : 3%;
    gap : 5%;
`;
const StyledMoneyBagIcon = styled(MoneyBagIcon)`
    width:40%;
`;


const USDCcontractAddress = "0xFEca406dA9727A25E71e732F9961F680059eF1F9";
const StablinContractAddress = "0x6F2b010B806C95A7BBAb63862C4e67155B5D1E5D";
const USDCABI = USDCContract.abi;
const StablinContractABI = StablinContract.abi;


const Redeem = async (tokenId) => {
    let provider = (window as any).ethereum;
    const e = new ethers.providers.Web3Provider(provider);
    const Redeemsigner = e.getSigner();
    const Stablincontract = new ethers.Contract(StablinContractAddress, StablinContractABI, Redeemsigner);
    let txn = await Stablincontract.redeem(tokenId);
    console.log(`Redeem Loading - ${txn.hash}`)
    await txn.wait()
    console.log(`Redeem Success - ${txn.hash}`)


}
const RetreiveMyToken = async (account : string) =>{

    let provider = (window as any).ethereum;
    const e = new ethers.providers.Web3Provider(provider);
    const Redeemsigner = e.getSigner();
    const Stablincontract = new ethers.Contract(StablinContractAddress, StablinContractABI, Redeemsigner);

    for(var i = 1 ; i<=100; i++){
        try{
            let txn2 = await Stablincontract.ownerOf(i);
            if(txn2 == account){
                console.log("You Have ", i, "TokenID");
                return i;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}


const RedeemModal = ({ setModalShow }) => {

    const {account, active} = useWeb3React<Web3Provider>();

    const OnClickRedeem = async () => {
        let tokenId = RetreiveMyToken(account)
        Redeem(tokenId);
        setModalShow(false);
    }

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


    return createPortal(
        <ModalOverlay onClick={() => setModalShow(false)}>
    <ModalBg>
        <LeftModalBox><StyledRedeemIcon/></LeftModalBox>
        <CenterModalBox>
            <Title first={'R'} rest={'edeem'}/>
            <CycleIcon/>
        </CenterModalBox>
        <ModalBox>
            <Row>
                <StyledMoneyBagIcon/>
                <RedeemExplanation body1={'Bounty'} body2={'$10 USDC'}/>
            </Row>           
            <ModalButton title="RECEIVE A BOUNTY" fontFamily="Impact" onClick={OnClickRedeem}/>
        </ModalBox>
    </ModalBg>
    </ModalOverlay>,
    document.getElementById('modal')
  );
};



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


export default RedeemModal;