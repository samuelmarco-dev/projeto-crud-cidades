import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { themeLight } from "./shared/themes";
import AppRoutes from "./routes";

function App() {
    return (
        <ThemeProvider theme={themeLight}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
