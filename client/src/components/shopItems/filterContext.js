import React, { useState, useContext } from 'react';

const FilterContext = React.createContext();

export function useFilterContext() {
    return useContext(FilterContext);
}

export function FilterContextProvider({ children }) {
    const [currentCategory, setCurrentCategory] = useState('');

    const value = {
        currentCategory,
        setCurrentCategory,
    };

    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}
