import { createContext, useState } from "react";

const RefreshContext = createContext();

const RefreshProvider = ({ children }) => {
    const [active, setActive] = useState(false);
    return (
        <RefreshContext.Provider value={{ active }}> {children}</RefreshContext.Provider >
    );
};

export default RefreshProvider;