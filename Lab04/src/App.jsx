import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TabGroup from "./pages/TabGroup";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/tabs/*" element={<TabGroup />} />
                <Route path="*" element={<Navigate to="/tabs/tab1" />} />
            </Routes>
        </Router>
    );
};

export default App;