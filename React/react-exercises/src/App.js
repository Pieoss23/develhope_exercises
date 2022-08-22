import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export default function App() {
    const [language, setLanguage] = useState('en')

    function handleLanguage(e) {
        setLanguage(e.target.value)
    }

    return (
        <div className="mainContainer">
            <select value={language} onChange={handleLanguage}>
                <option value='en'>English</option>
                <option value='it'>Italiano</option>
            </select>

            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
    )

}

/* Rewrite the DisplayLanguage component from Context 02 to be a function component,
and access the LanguageContext through the useContext hook. */