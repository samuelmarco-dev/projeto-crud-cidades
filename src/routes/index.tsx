import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Home } from "../pages";
import { useDrawerContext } from "../shared/hooks";

export const AppRoutes: React.FC = () => {
    const { handleOptions } = useDrawerContext();

    useEffect(() => {
        handleOptions([
            {
                icon: 'home',
                label: 'Página Inicial',
                path: '/inicial'
            }
        ]);
    }, [handleOptions]);

    return (
        <Routes>
            <Route path="/inicial" element={<Dashboard/>} />
            <Route path="/cadastro" element={<Home/>} />

            <Route path="*" element={<Navigate to="/cadastro"/>} />
        </Routes>
    );
};
