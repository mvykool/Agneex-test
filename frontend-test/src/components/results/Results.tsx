import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import './Results.css';

const Results = () => {
  const { searchResults } = useContext(SearchContext);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handleTitleClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const { searchTerm } = useParams();

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

      <section className='results-container'>
        {searchResults.length > 0 ? (
          searchResults.map((item, index) => (
            <div key={item.id} className='result-block'>
              <small>{item.url}</small>
              <h2 onClick={() => handleTitleClick(index)}>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))
        ) : (

          <div className='no-data-container'>
            <div>Not results found for  "<span>{searchTerm}"</span> </div>
            <div >Trying looking for: <span>bear, lion, cat, bird, cow, horse </span> </div>
          </div>
          
        )}

        {selectedItemIndex !== null && (
          <div className='selected-image'>
            <img src={searchResults[selectedItemIndex].image} alt='Selected Item' />
            <small>{searchResults[selectedItemIndex].url}</small>
            <h3>{searchResults[selectedItemIndex].title}</h3>
            <p>{searchResults[selectedItemIndex].description}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Results;
