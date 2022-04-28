import { useState, createContext } from 'react';

const Context = createContext();

const AppProvider = ({children}) => {
    const [countryValue, setCountryValue] = useState('');
    console.log("countryvalue", countryValue)
    return (
        <Context.Provider value={{countryValue, setCountryValue}}>
            {children}
        </Context.Provider>
    );
};

export { AppProvider, Context };
