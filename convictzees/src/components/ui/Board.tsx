import HorizontalLine from "../customicons/HorizontalLine";
import VerticalLine from "../customicons/VerticalLine";
import React from "react";
import styled from "styled-components";

const Board =() => {
    return(
        <Boards>
            <HorizontalLine/>
            <Contents>
                <CountTitle>50K</CountTitle>
                <CountDescription>Our Active User</CountDescription>
                <VerticalLine/>
                <CountTitle>43K</CountTitle>
                <CountDescription>Our Art Work</CountDescription>
                <VerticalLine/>
                <CountTitle>38K</CountTitle>
                <CountDescription>Available Artist</CountDescription>
                <VerticalLine/>
                <CountTitle>34K</CountTitle>
                <CountDescription>Our Products</CountDescription>
            </Contents>
            <HorizontalLine/>
        </Boards>
    );
}

export default Board;

const Contents = styled.div`
    display : flex;
    justfity-content : space-between;
    gap : 40px;
    margin-top : 40px;
    margin-bottom : 40px;
    justify-content: center;
    align-items: center;
`;

const Boards = styled.div`
    position : absolute;
    top: 220%; 
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CountTitle = styled.p`
    width: 111px; 
    height: 71px; 
    font-size: 55px; 
    font-weight: 700; 
    text-align: left; 
    color: #fff;
`;


const CountDescription = styled.p`
    width: 87px; 
    height: 43px; 
    font-size: 17.49152374267578px; 
    font-weight: 600; 
    text-align: left;
    left; color: #fff;
`;