import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Головна сторінка</h1>
            <p>Ласкаво просимо! Натисніть кнопку, щоб перейти до вкладок.</p>
            <button
                onClick={() => navigate("/tabs/tab1")}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "lightblue",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Перейти до вкладок
            </button>
        </div>
    );
};

export default Home;
