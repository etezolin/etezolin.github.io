import styled, { createGlobalStyle } from 'styled-components';
import { Tooltip } from 'react-tooltip';
import * as colors from './colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background: #e6e8e6;
  /* background: #e6e8e6; */
  color: ${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
  background: #fff;
}

button{
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a{
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul{
  list-style: none;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #000;
  padding: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
}

  body .Toastify .Toastify__toast-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* Garante que o contêiner ocupe toda a largura da tela */
  max-width: 100vw; /* Garante que não exceda a largura da viewport */
  max-height: 100vh; /* Garante que não exceda a altura da viewport */
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* Impede a interação com elementos subjacentes */
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
  color: #000;
  font-weight: 700;
  border-radius: 5px !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  padding: 1rem;
  text-align: center;
  z-index: 9999; /* Garante que o toast fique acima de outros elementos */
  pointer-events: auto; /* Permite a interação com o toast */
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: #000;
  font-weight: 700;
  border-radius: 5px !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

body .Toastify .Toastify__toast-container .Toastify__toast--info {
  background: ${colors.infoColor};
  color: #000;
  font-weight: 700;
  border-radius: 5px !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;

export const Container = styled.section`
  max-width: 100%;
  background: #e6e8e6;
  margin-top: 7rem !important;
`;

export const ContainerAlternative = styled.section`
  max-width: 100%;
  margin-left: 6rem !important;
  background: #e6e8e6;
`;

export const Body = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
`;

export const Header = styled.div`
  background: #233d4d;
  color: #fff;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const CustomTooltip = styled(Tooltip)`
  background: #333;
  color: #000;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
