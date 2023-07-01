import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
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
    }, 100);
  };


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
            {paginatedResults.map((item, index) => (
              <div key={item.id} className='result-block'>
                <small>{item.url}</small>
                <h2 onClick={() => handleTitleClick(index)}>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}

            {searchResults.length > itemsPerPage && (
              <div className='pagination-controls'>
                <button
                  disabled={currentPage === 1}
                  onClick={handlePreviousPage}
                >
                  Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                  disabled={endIndex >= searchResults.length}
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (

          <div className='no-data-container'>
            <div>Not results found for  "<span>{searchTerm}"</span> </div>
            {!errorMessage ? <div >Trying looking for: <span>bear, lion, cat, bird, cow, horse </span> </div> : null}
          </div>        
        )}

            {selectedItemIndex !== null && (
            <div className='selected-image'>
              <div className='selected-img-card'>
                {isLoading ? (
                  <div className='loader'></div>
                ) : (
                  <>
                    <img
                      src={searchResults[selectedItemIndex].image}
                      alt='Selected Item'
                    />
                    <small>{searchResults[selectedItemIndex].url}</small>
                    <h3>{searchResults[selectedItemIndex].title}</h3>
                    <p>{searchResults[selectedItemIndex].description}</p>
                  </>
                )}
              </div>
            </div>
          )}
        </section>
    </>
  );
};

export default Results;
