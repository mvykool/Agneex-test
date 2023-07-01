import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Search.css';

const Search = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { search, searchTerm, setSearchTerm } = useContext(SearchContext);

    const isResultsPage = location.pathname.startsWith(`/results`);
    const [inputValue, setInputValue] = useState(searchTerm || '');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
        setSearchTerm('');
        setInputValue('');
        }
    }, [location.pathname, setSearchTerm]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowErrorMessage(false);
    };

    const handleInputClean = () => {
        setInputValue('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            if(isResultsPage){
                setShowErrorMessage(true);
            }
            return;
        }
        setSearchTerm(inputValue); 
        navigate(`/results/${inputValue}`);
        search(inputValue);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>

                <div className={isResultsPage ? 'search-result' : 'search-home'}>
                    
                    <button className='search-icon-bg'><i className={isResultsPage ? "icon-result fa fa-search" : "icon-home fa fa-search"}></i></button>
                    {isResultsPage ? (
                        <div className='color-icons'>
                        <i className="fas fa-microphone fa-1x"></i>
                        <i className="fas fa-camera fa-1x"></i>
                    </div>
                    ) : null}

                    {isResultsPage && inputValue ? (
                        <i onClick={() => handleInputClean()} className="fa fa-times icon-close"></i>
                    ) : null}

                    <input type="search" value={inputValue} onChange={handleInputChange} placeholder='Buscar' />

                    {!isResultsPage && inputValue ? (
                        <i onClick={() => handleInputClean()} className="fa fa-times icon-close"></i>
                    ) : null}
                    
                    {!isResultsPage ? (
                        <div className='color-icons'>  
                        <i className="fas fa-microphone fa-1x"></i>
                        <i className="fas fa-camera fa-1x"></i>
                    </div>
                    ) : null}

                </div>

                {isResultsPage ? null : (
                    <button type='submit' className="search-btn">
                        Buscar
                    </button>
                )}

                {showErrorMessage && isResultsPage && (
                    <p className="error-message">Please enter a search term</p>
                )}

            </form>
        </div>
    );
};

export default Search