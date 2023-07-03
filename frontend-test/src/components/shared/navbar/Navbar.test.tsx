import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { assert } from 'chai';

describe('Navbar ', () => {
it('renders navbar', () => {
render(
	<MemoryRouter>
	<Navbar />
	</MemoryRouter>
);

const button = screen.findAllByText('acceder')
assert.isDefined(button);

const link = screen.findAllByText('Gmail')
assert.isDefined(link)

});
});
