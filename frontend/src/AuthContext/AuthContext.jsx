import React, { createContext, useState } from 'react'


export const mycontext = createContext();
export default function AuthContextProvider({ children }) {

    const [context, setContext] = useState({
        isAuth: false,
        token: null
    });

    const login = (token) => {
        setContext({ isAuth: true, token: token })
    }

    const logout = () => {
        setContext({ isAuth: false, token: null })
    }

    return <mycontext.Provider value={{ context, setContext, login, logout }}>
        {children}
    </mycontext.Provider>
}
