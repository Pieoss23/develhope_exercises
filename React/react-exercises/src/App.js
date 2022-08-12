import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Clock } from "./Clock";

class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value={"en"}>ENGLISH</option>
          <option value={"ita"}>ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
          <Clock language={'en'}/>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

// Create a LanguageContext and wrap a DisplayLanguage component within its provider.
// Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.
