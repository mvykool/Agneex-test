import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Results = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <div>
      {searchResults.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;