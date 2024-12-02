import React from "react";
import { NavLink, Routes, Route, Navigate, useNavigate } from "react-router-dom";

const TabGroup = () => {
    const navigate = useNavigate();

    const tabs = [
        { path: "tab1", label: "Tab 1", content: "Контент вкладки 1" },
        { path: "tab2", label: "Tab 2", content: "Контент вкладки 2" },
        { path: "tab3", label: "Tab 3", content: "Контент вкладки 3" },
    ];

    return (
        <div>
            <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button
                    onClick={() => navigate("/")}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        backgroundColor: "lightcoral",
                        border: "1px solid black",
                        borderRadius: "5px",
                        textDecoration: "none",
                    }}
                >
                    На головну
                </button>

                {tabs.map((tab) => (
                    <NavLink
                        key={tab.path}
                        to={`/tabs/${tab.path}`}
                        style={({ isActive }) => ({
                            padding: "10px",
                            border: "1px solid black",
                            backgroundColor: isActive ? "lightblue" : "white",
                            textDecoration: "none",
                        })}
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </nav>

            <Routes>
                {tabs.map((tab) => (
                    <Route
                        key={tab.path}
                        path={tab.path}
                        element={<div>{tab.content}</div>}
                    />
                ))}
                <Route path="*" element={<Navigate to="/tabs/tab1" />} />
            </Routes>
        </div>
    );
};

export default TabGroup;
