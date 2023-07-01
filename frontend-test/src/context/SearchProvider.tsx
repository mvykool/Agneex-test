import React, { useState, useEffect } from 'react';
import { SearchContext, IData, SearchState } from './SearchContext';
import fetchData from '../services/fetchData';

interface Props {
  children: React.ReactNode;
}

const SearchProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<IData[]>([]);
  const [searchResults, setSearchResults] = useState<IData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData().then((fetchedData: IData[]) => {
      setData(fetchedData);
      setSearchResults(fetchedData);
    });
  }, []);

  const search = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    if (!newSearchTerm.trim()) {
      setSearchResults(data);
    } else {
      setSearchResults(
        data.filter(item => item.title.toLowerCase().includes(newSearchTerm.toLowerCase()))
      );
    }
  };

  const value: SearchState = {
    searchResults,
    searchTerm,
    setSearchTerm,
    search
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
