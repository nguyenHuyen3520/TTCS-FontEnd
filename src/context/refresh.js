import { createContext } from "react";

const RefreshContext = createContext();

const RefreshProvider = ({ children }) => {
    // const [active, setActive] = useState(false);
    return (
        <RefreshContext.Provider value={true}> {children}</RefreshContext.Provider >
    );
};

export default RefreshProvider;