
import React from 'react';

export interface IData {
type: string;
id: number;
url: string;
title: string;
description: string;
image: string;
}

export interface SearchState {
	searchResults: IData[];
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	search: (searchTerm: string) => void;
  }

  const initialState: SearchState = {
	searchResults: [],
	search: () => undefined,
	searchTerm: '',
	setSearchTerm: () => undefined,
};

export const SearchContext = React.createContext<SearchState>(initialState);