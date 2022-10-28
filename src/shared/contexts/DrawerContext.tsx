import { createContext, ReactNode, useCallback, useState } from "react";

interface DrawerContextData {
    open: boolean;
    drawerOptions: ObjectOptions[];
    toggleOpen: () => void;
    handleOptions: (newOptions: ObjectOptions[]) => void;
}

interface Children {
    children: ReactNode;
}

interface ObjectOptions {
    path: string;
    label: string;
    icon: string;
}

export const DrawerContext = createContext({} as DrawerContextData);

export const DrawerProvider: React.FC<Children> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<ObjectOptions[]>([]);

    const toggleOpen = useCallback(() => {
        setOpen(oldOpen => !oldOpen);
    }, []);

    const handleOptions = useCallback((newOptions: ObjectOptions[]) => {
        setDrawerOptions(newOptions);
    }, []);

    return (
        <DrawerContext.Provider
            value={{ open, toggleOpen, drawerOptions, handleOptions }}
        >
            {children}
        </DrawerContext.Provider>
    );
};
