import { useState, useEffect, createContext } from 'react';
import lang_value from "./../data_lang.json"

const Context = createContext();

const AppProvider = ({children}) => {
    const [countryValue, setCountryValue] = useState('');
    return (
        <Context.Provider value={{countryValue, setCountryValue, lang_value}}>
            {children}
        </Context.Provider>
    );
};

export { AppProvider, Context };
