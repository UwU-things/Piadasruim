import React, { useState, createContext, ReactNode, useEffect } from "react";

type AuthContextType = {
    user: string;
}

export const AuthContext = createContext({} as AuthContextType);

interface Props{
    children: ReactNode | undefined
}

const AuthProvider = ({children}: Props) => {
    
    const [user, setUser] = useState("");

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;