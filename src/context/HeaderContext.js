import { createContext,useState } from "react";

const HeaderContext = createContext();

const HeaderProvider = ({children}) => {
    const [isSection, setIsSection] = useState(true);

    return (
        <HeaderContext.Provider value={{isSection,setIsSection}}>
            {children}
        </HeaderContext.Provider>
    );
};

export {HeaderContext,HeaderProvider};