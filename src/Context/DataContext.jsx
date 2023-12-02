import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Fake Intitial state for graph
  const initialSelectedItem = {
    id: 1,
    name: 'Default Country',
    gdp: 1000000,
    population: 1000000,
    male: 50,
    female: 50,
  };

  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <DataContext.Provider value={{ selectedItem, handleItemSelected }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
