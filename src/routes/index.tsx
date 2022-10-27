import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../shared/components/Home";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}

export default AppRoutes;
