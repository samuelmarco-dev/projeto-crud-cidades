import {
    createContext,
    ReactNode,
    useCallback,
    useMemo,
    useState,
} from "react";
import { ThemeProvider } from "@mui/material";
import { themeLight, themeDark } from "../themes";
import { Box } from "@mui/system";

type OptionTheme = "dark" | "light";

interface ThemeContextData {
    themeName: OptionTheme;
    toggleTheme: () => void;
}

interface Children {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const AppThemeProvider: React.FC<Children> = ({ children }) => {
    const [themeName, setTheme] = useState<OptionTheme>("light");

    const toggleTheme = useCallback(() => {
        setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
    }, []);

    const theme = useMemo(() => {
        if (themeName === "light") return themeLight;
        else return themeDark;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box
                    width="100vw"
                    height="100vh"
                    bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
