import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

class App extends React.Component {

  render() {
    return (
      <div>
        
        <LanguageContext.Provider>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

// Create a LanguageContext and wrap a DisplayLanguage component within its provider.
// Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.
