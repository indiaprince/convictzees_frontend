import styled from "styled-components";
import Button from "../ui/Button";


const Header =() => {
    return(
        <NavBar>
                <StyledButton><Button  title="Convictzees" width="336px" height="73px" fontSize="55px" fontFamily="IrishGrover-Regular, cursive"/></StyledButton>
                <NavLink>
                <Link>EXPLORE</Link>
                <Link>MARKETPLACE</Link>
                <Link>REDEEM</Link>
                <Link>ROADMAP</Link>
                <ConnectButton>
                        <ConnectButtonText>
                            CONNECT WALLET
                        </ConnectButtonText>
                </ConnectButton>
            </NavLink>
        </NavBar>
    );
}

export default Header

const StyledButton = styled.div`
    margin-left: 10%;
    margin-right : 15%;
`;

const NavBar = styled.nav`
    top: 1%;
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
`;
const Link = styled.p`
    lex-grow: 0; 
    flex-shrink: 0; 
    font-family : Imprima;
    font-size: 37px; 
    text-align: left; 
    text-transform: uppercase; 
    color: #fff;
`;

const ConnectButton = styled.button`
    box-sizing: border-box;


    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 263px;
    height: 60px;
    padding-left: 1.0%; 
    padding-right: 1.0%; 
    padding-top: 0.5%; 
    padding-bottom: 3%;

    border-radius: 35px; 
    background: #ff8a00; 
    border-width: 5px; 
    border-color: #ff8a00;
`;

const ConnectButtonText = styled.p`
    width : 263px;
    height: 60px;

    font-family : Impact;
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    line-height: 40px;
    text-transform: uppercase;
    text-align: center; 

    margin:0;
    color: #FFFFFF;

`;