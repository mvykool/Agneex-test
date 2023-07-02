import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import ResultsList from './ResultsList';
import Pagination from './Pagination';
import SelectedImage from './SelectedImage';
import './Results.css';

const Results = () => {
  const { searchResults, errorMessage } = useContext(SearchContext);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTitleClick = (index: number) => {
    setSelectedItemIndex(index);
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  //pagination logic
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedResults = searchResults.slice(startIndex, endIndex);
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  //close selected items in mobile
  const closeMobileView = () => {
    setSelectedItemIndex(null)
  }

  return (
    <>
      {/* sub-navbar */}
      <div className='under-nav'>
        <ul className='under-nav-list'>
          <li>Imágenes</li>
          <li>Videos</li>
          <li>Noticias</li>
          <li>Libros</li>
          <li>Maps</li>
          <li>Shopping</li>
        </ul>
      </div>
      {searchResults.length > 0 && (
        <p className='query'>Resultados de: <span>{searchTerm}</span></p>
      )}

      {errorMessage ? <p className="error">{errorMessage}</p> : null}

      <section className='results-container'>
        {searchResults.length > 0 ? (
          <>
            <ResultsList paginatedResults={paginatedResults} handleTitleClick={handleTitleClick} />

            {searchResults.length > itemsPerPage && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
              />
            )}
          </>
        ) : (
          <div className='no-data-container'>
            <div>Not results found for  "<span>{searchTerm}"</span> </div>
            {!errorMessage ? <div >Trying looking for: <span>bear, lion, cat, bird, cow, horse </span> </div> : null}
          </div>        
        )}

        {selectedItemIndex !== null && (
          <SelectedImage 
            selectedItem={searchResults[selectedItemIndex]} 
            closeMobileView={closeMobileView} 
            isLoading={isLoading} 
          />
        )}
      </section>
    </>
  );
};

export default Results;
