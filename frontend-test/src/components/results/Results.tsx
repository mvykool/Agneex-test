import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import './Results.css'

const Results = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
    {/**sub-navbar */}
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

    <section className='results-container'>
      {searchResults.map(item => (
        <div key={item.id}>
          <small>{item.url}</small>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
    </>
  );
};

export default Results;