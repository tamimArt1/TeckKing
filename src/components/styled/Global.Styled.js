import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto', sans-serif;
		background-color: ${({ theme }) => theme.colors.primary};
	}

	a {
		text-decoration: none;

		&:hover {
			opacity: 0.8;
		}
	}

	img {
		max-width: 100%;
	}
`;
