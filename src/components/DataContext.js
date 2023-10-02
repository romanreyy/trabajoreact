import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [dataList, setDataList] = useState([]);

    return (
        <DataContext.Provider value={{ dataList, setDataList }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};