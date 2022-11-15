import Image from 'next/image'
import background from '../../components/customicons/background2.svg';
import styled from "styled-components";
import Title from '../../components/ui/Title';
import Arrow from '../../components/customicons/BackArrow';
import Link from 'next/link';
import Explanation from '../../components/ui/Explanation';
import Process from '../../components/customicons/Process';
import NoRiskIcon from '../../components/customicons/NoRiskIcon';
import YesProfitIcon from '../../components/customicons/YesProfitIcon';
import YesNFTIcon from '../../components/customicons/YesNFTIcon';
import { useRouter } from 'next/router';
const Intro =() => {
        const router = useRouter()

        return (
            <div>
                
            <ImageContainer>
                <Image
                    src={background}
                    alt="Unable to Load Background"
                    layout="responsive" 
                />
            </ImageContainer>

            <StyledHeader>
                    <Title first = "C" rest= "onvictzees"/>
                    <br/>
                    <Title first = "" rest= "II"/>
                    <br/>
                    <Title first = "" rest= "First stable NFT project of Stabln"/>
            </StyledHeader>
            <button  onClick={() => router.back()}><StyledBack/></button>

            <StyledExplain>
            <Explanation body1={'"Stabln"s first stable NFT collection, Convictzees, is the stable NFT with Defi system.'} 
                        body2={'What is stable NFT? As the name suggests, the price of the NFT is stable.'} 
                        body3={'Holders can redeem their sNFT anytime they wants. '} 
                        body4={'all minting and redeeming are processed by USDC or USDT stable coin to ensure the stability'}
                        body5={' of the treasury and sNFT itself. There is 0% chance that a holder can lose money. '}
                        />
            </StyledExplain>
            <StyledProcess/>
            <StyledExplain2>
            <Explanation body1={'Does stable mean no profit? Absolutely not! '} 
                        body2={'Stabln protocol receives flexible commissions from minting and redeeming.'} 
                        body3={'Every week, Stabln distributes the weekly commission revenue to all holders as interest.'} 
                        body4={' The portion of the interest is the portion your Convictzees takes in the entire sNFT protocol.  '}
                        body5={''}
                        />
            </StyledExplain2>
            <Benefit><NoRiskIcon/><YesProfitIcon/><YesNFTIcon/></Benefit>
            <StyledExplain3>
            <Explanation body1={'Become the Convictzee yourself! '} 
                        body2={'The greater the bounty of your Convictzees, the greater the rebase award will be!'} 
                        body3={''} 
                        body4={''}
                        body5={''}
                        />
            </StyledExplain3>
            <StyledButton onClick={() => router.back()}><ButtonText>Back</ButtonText></StyledButton>
            </div>
    )

}
const Benefit = styled.div`
    display : inline-flex;
    position: absolute; 
    padding-left : 10%;
    width : 90%;
    top: 205%;
    align-items: center;
    text-align : center;

`;
const StyledHeader = styled.div`
    position: absolute; 
    width : 100%;
    top: 6%;
    align-items: center;
    text-align : center;
`;

const StyledProcess = styled(Process)`
    padding-left:10%;
    position: absolute; 
    width : 90%;
    top: 85%;
    align-items: center;
    text-align : center;
`;
const StyledBack = styled(Arrow)`
    padding-left : 80%;
    position: absolute; 
    width : 100%;
    top: 4%;
`;
const StyledExplain = styled.div`

    position: absolute; 
    width : 100%;
    top: 40%;
    align-items: center;
    text-align : center;
`;
const StyledExplain2 = styled.div`

    position: absolute; 
    width : 100%;
    top: 165%;
    align-items: center;
    text-align : center;
`;
const StyledExplain3 = styled.div`
    position: absolute; 
    width : 100%;
    top: 260%;
    align-items: center;
    text-align : center;
`;
const ImageContainer = styled.div`
    width: 100%;
    position: relative;
`;
const StyledButton = styled.button`

    position: absolute; 
    width : 50%;
    left : 45%;
    top: 280%;
    align-items: center;
    text-align : center;

    border-radius: 20px;
    background: #ff8a00;
    padding : 0;
    margin:0;
    width : 189px;
    height : 69px;

`;

const ButtonText = styled.p`
    font-family:Impact;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start : 0;
    margin-block-end : 0;
    height:100%;
    color: #fff;

    font-size : 55px;

    @media screen and (max-width: 1824px) {
        font-size : 52px;  
    }
    @media screen and (max-width: 1600px) {
        font-size : 50px;

    }
    @media screen and (max-width: 1440px) {
        font-size : 47px;

    }
    @media screen and (max-width: 1280px) {
        font-size : 40px;

    }
    @media screen and (max-width: 1024px) {
        font-size : 35px;

    }
`;
export default Intro
