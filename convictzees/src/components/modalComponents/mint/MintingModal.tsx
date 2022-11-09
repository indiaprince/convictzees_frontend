import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import MintIcon from '../../customicons/MintIcon';

import ModalExplanation from './ModalExplanation';
import ModalButton from './ModalButton';

import Title from '../../ui/Title';


const ModalBg = styled.div`
    display: inline-flex;
    position: absolute;
    top: 160%;
    left: 5%;
    z-index: 9999;


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


const MintingModal = ({ setModalShow }) => {

    return createPortal(
    <ModalBg>
        <LeftModalBox><Title first={'C'} rest={'hoose your Convictzee'}/></LeftModalBox>
        <CenterModalBox><StyledMinIcon/></CenterModalBox>
        <ModalBox>
            <ModalExplanation body1={'Name: Kyle'} body2={'Crime: Ton of Spam'} body3={'Strength: Basketball'} body4={'Bounty: $10 USDC'}/>
            <ModalButton title="BREAK HIM OUT" fontFamily="Impact" onClick={() => setModalShow(false)}/>
        </ModalBox>
    </ModalBg>,
    document.getElementById('modal')
  );
};

export default MintingModal;