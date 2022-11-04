import styled from "styled-components";

interface IButton {
    title : string;
    width : string;
    height : string;
    fontSize : string;
    fontFamily : string;
}

const Button =(props : IButton) => {
    return (
    <TopLogo style={{width : props.width, height : props.height}}>
        <LogoText style ={{fontSize:props.fontSize, fontFamily:props.fontFamily}}>
            {props.title}
        </LogoText>
    </TopLogo>        
    );
}

export default Button;

const LogoText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start : 0;
    margin-block-end : 0;
    height:100%;
    color: #fff;
`;
const TopLogo = styled.div`
    border-radius: 20px;
    background: #ff8a00;
    padding : 0;
    margin:0;
`;