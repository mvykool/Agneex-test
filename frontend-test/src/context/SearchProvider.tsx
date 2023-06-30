import React, { useState, useEffect } from 'react';
import { SearchContext, IData, SearchState } from './SearchContext';
import fetchData from '../service/fetchData';

interface Props {
  children: React.ReactNode;
}

const SearchProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<IData[]>([]);
  const [searchResults, setSearchResults] = useState<IData[]>([]);

  useEffect(() => {
    fetchData().then((fetchedData: IData[]) => {
      setData(fetchedData);
      setSearchResults(fetchedData);
    });
  }, []);

  const search = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSearchResults(data);
    } else {
      setSearchResults(
        data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  };

  const value: SearchState = {
    searchResults,
    search
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
