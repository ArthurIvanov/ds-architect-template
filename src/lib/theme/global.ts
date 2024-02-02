import { createGlobalStyle } from "styled-components";
import FiraSansReg from "../fonts/FiraSans-Regular.ttf";
import FiraSansIt from "../fonts/FiraSans-Italic.ttf";

export const GlobalStyle = createGlobalStyle`

	@font-face {
		font-family: 'Fira Sans';
		font-style: normal;
		font-weight: 400;
		src: url(${FiraSansReg}) format('truetype');
	}

	@font-face {
		font-family: 'Fira Sans Italic';
		font-style: italic;
		font-weight: 400;
		src: url(${FiraSansIt}) format('truetype');
	}
	
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

	body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
            -webkit-overflow-scrolling: touch;

            font-family: 'Fira Sans', sans-serif;
            background: #ddff;
	}
`;
