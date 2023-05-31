import React, { createContext, useContext, useState } from 'react';

export const PictureContext = createContext();

export const usePictureContext = () => useContext(PictureContext);

export const PictureProvider = ({ children }) => {
    const [pictures, setPictures] = useState([]);

    return (
        <PictureContext.Provider value={{ pictures, setPictures }}>
            {children}
        </PictureContext.Provider>
    );
};
