import React, { useState } from "react";
import Newsletter from "./components/newsletter";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    function alteraEstilo() {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <div className={darkMode ? "App AppDarkMode" : "App AppLightMode"}>
                <Newsletter darkMode={darkMode ? true : undefined} />
                <button className="AppAlteraEstilo" type="button" onClick={alteraEstilo}>
                    Alterar Estilo
                </button>
            </div>
        </>
    );
}

export default App;
