import { createContext, ReactNode, useCallback, useState } from "react";

interface DrawerContextData {
    open: boolean;
    toggleOpen: () => void;
}

interface Children {
    children: ReactNode;
}

export const DrawerContext = createContext({} as DrawerContextData);

export const DrawerProvider: React.FC<Children> = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen(oldOpen => !oldOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{ open, toggleOpen}}>
            {children}
        </DrawerContext.Provider>
    );
};
