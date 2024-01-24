import { css, createGlobalStyle } from "styled-components";

export const bodyStyles = css`
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-overflow-scrolling: touch;

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
`;
export const GlobalStyle = createGlobalStyle<any>`
	body {
        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            src: url('assets/fonts/FiraSans-Regular.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: italic;
            font-weight: 400;
            src: url('assets/fonts/FiraSans-Regular.ttf') format('truetype');
        }

		font-family: 'Fira Sans', sans-serif;

		${bodyStyles}
	}
`;
