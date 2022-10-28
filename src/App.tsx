import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { MenuDrawer } from "./shared/components";
import { AppRoutes } from "./routes";

export const App: React.FC = () => {
    return (
        <AppThemeProvider>
            <DrawerProvider>
                <BrowserRouter>

                    <MenuDrawer>
                        <AppRoutes />
                    </MenuDrawer>

                </BrowserRouter>
            </DrawerProvider>
        </AppThemeProvider>
    );
};
