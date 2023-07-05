import React from 'react';
import { ThemeProvider } from 'styled-components';

// types
import type { ReactNode } from 'react';
import type { WindowLocation } from '@reach/router';

// components
import Footer from '../Footer';
import Navigation from '../Navigation';

// styled components
import GlobalStyle from '../../styles/GlobalStyles';
import theme from '../../styles/theme';

// props
type LayoutProps = {
	children: ReactNode;
	location: WindowLocation;
};

const Layout = ({ children, location }: LayoutProps) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Navigation />
		<main className='test'>{children}</main>
		<Footer />
	</ThemeProvider>
);

export default Layout;