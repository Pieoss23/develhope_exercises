import React from "react";
import { LanguageContext } from "./LanguageContext";    

const Languages = {
    en: 'English',
    ita: 'Italiano'
}

export class DisplayLanguage extends React.Component {
    render() {
      return (
        <div>
          <LanguageContext.Consumer>
            {(language) => {
              return <h1>Language: {Languages[language]}</h1>;
            }}
          </LanguageContext.Consumer>
        </div>
      );
    }
  }