import {createContext, useContext, useState} from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);


const AppContext = (props) => {
    const [menuItem, setMenuItem] = useState('/');

    return (
        <GlobalContext.Provider value={{menuItem, setMenuItem}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default AppContext;