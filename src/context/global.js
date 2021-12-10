import React from 'react';

export const GlobalContext = React.createContext({
    globalState: {},
    setGlobalState: (_newState) => { }
});

export const GlobalState = (props) => {
    const [state, setState] = React.useState({});

    return <GlobalContext.Provider value={{ globalState: state, setGlobalState: setState }}>
        {props.children}
    </GlobalContext.Provider>
}