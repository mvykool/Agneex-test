import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Search.css';

const Search = () => {
const location = useLocation();
const navigate = useNavigate();
const { search, searchTerm, setSearchTerm, setErrorMessage } = useContext(SearchContext);

const isResultsPage = location.pathname.startsWith(`/results`);
const [inputValue, setInputValue] = useState(searchTerm || '');

//clean input while in home

useEffect(() => {
    if (location.pathname === '/') {
    setSearchTerm('');
    setInputValue('');
    }
}, [location.pathname, setSearchTerm]);

//handle submit

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) {
    if(isResultsPage){
        setErrorMessage("Please provide a valid search term such as: lion, horse, bear");
    }
    return;
    }
    setErrorMessage(""); 
    setSearchTerm(inputValue); 
    navigate(`/results/${inputValue}`);
    search(inputValue);
};

//dynamic icons

const searchIconClass = isResultsPage ? 'icon-result fa fa-search' : 'icon-home fa fa-search';
const inputCloseIcon = inputValue && <i onClick={() => setInputValue('')} className="fa fa-times icon-close"></i>;

return (
    <div className="search-container">
    <form onSubmit={handleSubmit}>
        <div className={isResultsPage ? 'search-result' : 'search-home'}>
        <button className='search-icon-bg'><i className={searchIconClass}></i></button>
        {isResultsPage ? (
            <div className='color-icons'>
            {inputCloseIcon}    
            <i className="fas fa-microphone fa-1x"></i>
            <i className="fas fa-camera fa-1x"></i>
            </div>
        ) : null}
        <input type="search" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Buscar' />
        {!isResultsPage && (
            <div className='color-icons'> 
            {inputCloseIcon} 
            <i className="fas fa-microphone fa-1x"></i>
            <i className="fas fa-camera fa-1x"></i>
            </div>
        )}
        </div>
        {!isResultsPage && (
        <button type='submit' className="search-btn">
            Buscar
        </button>
        )}
    </form>
    </div>
);
};

export default Search;