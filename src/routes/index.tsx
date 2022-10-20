import { Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {
    return (  
        <Routes>
            <Route path="/home" element={<p>fdsfssdffdsfddfs</p>} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}

export default AppRoutes;
