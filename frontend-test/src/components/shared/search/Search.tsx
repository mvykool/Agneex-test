import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Search.css';

const Search = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { search, searchTerm, setSearchTerm } = useContext(SearchContext);

    const isResultsPage = location.pathname === '/results';
    const [inputValue, setInputValue] = useState('');

    //empty search term when home page is on
    useEffect(() => {
        if (location.pathname === '/') {
        setSearchTerm('');
        }
    }, [location.pathname, setSearchTerm]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInputValue(e.target.value);
        setSearchTerm(e.target.value);
    };

    const handleInputClean = () => {
        setInputValue('');
        setSearchTerm('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            return;
        }
        navigate('/results');
        search(searchTerm);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>

                <div className={isResultsPage ? 'search-result' : 'search-home'}>
                    
                    <i onClick={() => handleSubmit} className={isResultsPage ? "icon-result fa fa-search" : "icon-home fa fa-search"}></i>
                    {isResultsPage ? (
                        <div className='color-icons'>
                        <i className="fas fa-microphone fa-1x"></i>
                        <i className="fas fa-camera fa-1x"></i>
                    </div>
                    ) : null}

                    {isResultsPage && inputValue ? (
                        <i onClick={() => handleInputClean()} className="fa fa-times icon-close"></i>
                    ) : null}

                    <input type="search" value={searchTerm} onChange={handleInputChange} placeholder='Buscar' />

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

            </form>
        </div>
    );
};

export default Search