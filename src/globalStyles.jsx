// React
import { Link } from "react-router-dom";

// styled components
import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #F6FCFF;
        padding: 0;
        margin: 0;
        font-family: "Montserrat", sans-serif;
    }
    
    input::placeholder,
    textarea::placeholder {
        font-family: "Montserrat", sans-serif;
        color: #AAA;
    }
    
    input:focus,
    textarea:focus {
        outline: none;
    }
    
    a,
    nav button {
        font-family: "Montserrat", sans-serif;
        background-color: transparent;
        text-decoration: none;
        border: none;
        color: #000;
        transition: .4s;
        font-size: 1em;
        cursor: pointer;
    }

    a:hover,
    nav button:hover{
        color: #BBB;
    }

    /* form styles */
    form {
        max-width: 40%;
        margin: 0 auto;
    }

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
    }

    label span {
        margin-bottom: .3em;
        font-weight: bold;
        text-align: left;
    }

    input,
    textarea {
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #CCC;
        padding: .8em 0;
        background-color: transparent;
    }
 
`;

// Buttons

export const BtnStyled = css`
  background-color: #1a8918;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;

  &:hover {
    background-color: #0f730c;
    color: #fff;
  }

  &:disabled {
    background-color: #aaa;
  }
`;


// Links styled buttons
export const LinkBtn = styled(Link)`
  ${BtnStyled}
`

export const LinkBtnDark = styled(LinkBtn)`
  background-color: #000;
  border-radius: 0;
`;

export const LinkBtnOutline = styled(LinkBtn)`
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;
  
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;


// Buttons styled buttons
export const Btn = styled.button`
  ${BtnStyled}
`;

export const BtnDark = styled(Btn)`
  background-color: #000;
  border-radius: 0;
`;


export const BtnOutline = styled(Btn)`
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const BtnDanger = styled(Btn)`
  &:hover {
    background-color: #dc3545;
  }
`;

export const BtnDangerOutline = styled(Btn)`
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;

  &:hover {
    background-color: #dc3545;
  }
`;

// Error
export const Error = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 5px;
  border-radius: 5px;
`;
