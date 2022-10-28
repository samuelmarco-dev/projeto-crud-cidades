import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../shared/components";
import { useDrawerContext } from "../shared/hooks";

export const AppRoutes: React.FC = () => {
    const { handleOptions } = useDrawerContext();

    useEffect(() => {
        handleOptions([
            {
                icon: 'home',
                label: 'Página Inicial',
                path: '/home'
            }
        ]);
    }, [handleOptions]);

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};
