import { createContext, useState } from "react";

const RefreshContext = createContext();

const RefreshProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(true);
    return (
        <RefreshContext.Provider value={refresh}> {children}</RefreshContext.Provider >
    );
};

export default RefreshProvider;