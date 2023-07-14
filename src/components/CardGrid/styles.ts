import { Link } from 'gatsby';
import styled from 'styled-components';

export const Grid = styled.ul`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	list-style: none;
	margin: 0;
	padding: 0;
`;
