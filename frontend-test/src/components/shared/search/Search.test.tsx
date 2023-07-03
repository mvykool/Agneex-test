import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Search from './Search';
import { assert } from 'chai';
import userEvent from '@testing-library/user-event';

describe('Navbar', () => {
it('renders navbar', () => {
render(
	<MemoryRouter>
	<Search />
	</MemoryRouter>
);

const searchInput = screen.getByPlaceholderText('Buscar');
assert.isDefined(searchInput);

userEvent.type(searchInput, 'lion'); 

const buscarButton = screen.getByText('Buscar');
assert.isDefined(buscarButton);

userEvent.click(buscarButton); 
});
});
