import { useState, useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { CgSearch, CgClose } from 'react-icons/cg';
import './Search.css';

const Search = () => {
const location = useLocation();
const isResultsPage = location.pathname === '/results';
const navigate = useNavigate();
const [searchTerm, setSearchTerm] = useState('');
const { search } = useContext(SearchContext);

const [inputValue, setInputValue] = useState('');

const handleSearch = () => {
	navigate('/results');
	search(searchTerm);
};

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setInputValue(e.target.value);
	setSearchTerm(e.target.value);
};

const handleInputClean = () => {
	setInputValue('');
	setSearchTerm('');
};

return (
	<div className="search-container">
	<div className={isResultsPage ? 'search-result' : 'search-home'}>
		<CgSearch className="icon" />
		{isResultsPage && inputValue ? (
		<CgClose onClick={handleInputClean} className="icon-close-right" />
		) : null}
		<input type="search" value={inputValue} onChange={handleInputChange} />
		{!isResultsPage && inputValue ? (
		<CgClose onClick={handleInputClean} className="icon-close" />
		) : null}
	</div>
	{isResultsPage ? null : (
		<button onClick={handleSearch} className="search-btn">
		Buscar
		</button>
	)}
	</div>
);
};

export default Search;
