import styled from "styled-components";

interface IButton {
    title : string;
    width : string;
    height : string;
    fontSize : string;
}

const Button =(props : IButton) => {
    return (
    <TopLogo style={{width : props.width, height : props.height}}>
        <LogoText style ={{fontSize:props.fontSize}}>
            {props.title}
        </LogoText>
    </TopLogo>        
    );
}

export default Button;

const LogoText = styled.p`
    padding-top : 10px;
    display : center;
    flex-grow: 0; 
    flex-shrink: 0; 
    text-align: center; 
    margin : 0;
    margin-top:2%;
    color: #fff;
`;
const TopLogo = styled.div`
    border-radius: 20px;
    background: #ff8a00;
`;