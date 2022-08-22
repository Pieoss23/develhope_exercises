import React from "react";
import { FilteredList } from "./FilteredList"

const objectList = [
  { name: "Pietro", id: 1, age: 30 },
  { name: "Marco", id: 2, age: 17 },
  { name: "Luigi", id: 3, age: 14 },
  { name: "Cesare", id: 4, age: 2 },
  { name: "Riccardo", id: 5, age: 26 },
  { name: "Monica", id: 6, age: 16 },
];

class App extends React.Component {

  render() {
    return (
      <div className="container">
      <FilteredList objectList={objectList} />
    </div>
    );
  }
}

export default App;


/* Create a FilteredList component that receives a list of objects each containing a name,
 an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18,
  and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list. */