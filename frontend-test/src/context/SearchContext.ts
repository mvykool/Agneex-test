
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
    search: (term: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    errorMessage: string;
    setErrorMessage: (message: string) => void;
}

const initialState: SearchState = {
    searchResults: [],
    search: () => undefined,
    searchTerm: '',
    setSearchTerm: () => undefined,
    errorMessage: '',
    setErrorMessage: () => undefined,
};

export const SearchContext = React.createContext<SearchState>(initialState);