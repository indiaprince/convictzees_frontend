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
const RedeemModal = ({ setModalShow }) => {


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
            <ModalButton title="RECEIVE A BOUNTY" fontFamily="Impact" onClick={() => setModalShow(false)}/>
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