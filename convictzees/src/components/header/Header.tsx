import styled from "styled-components";
import Button from "../ui/Button";


const Header =() => {
    return(
        <NavBar>
                <StyledButton><Button  title="Convictzees" width="336px" height="73px" fontSize="55px"/></StyledButton>
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
    margin-left: 5%;
    margin-right : 15%;
`;

const NavBar = styled.nav`
    top: 1%;
    display: flex;
    position: absolute; 
    width:100%;
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
    padding-right: 3%; 
    padding-top: 0.5%; 
    padding-bottom: 3%;

    border-radius: 35px; 
    background: #ff8a00; 
    border-width: 5px; 
    border-color: #ff8a00;
`;

const ConnectButtonText = styled.p`
    display : flex;
    flex-grow: 0; 
    flex-shrink: 0; 
    text-align: center; 


    width : 233px;
    height: 40px;

    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    text-transform: uppercase;
    margin:0;

    color: #FFFFFF;

`;