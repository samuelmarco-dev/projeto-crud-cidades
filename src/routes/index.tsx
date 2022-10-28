import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../shared/components";

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};
