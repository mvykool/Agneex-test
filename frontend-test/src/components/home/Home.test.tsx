import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { assert } from 'chai';

describe('Home component', () => {
it('renders Home', () => {
render(
	<MemoryRouter>
	<Home />
	</MemoryRouter>
);

const logoElement = screen.getByAltText('logo');
assert.isDefined(logoElement);
});
});
