import React from "react";
import { Container } from "./Container";
import { TodoList } from "./TodoList";
class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={"Title from props"}>
          {this.props.children}
          <TodoList
            render={(activity, deleteFunction) => {
              const todo = activity.map((act, index) => (
                <li key={act + index}>
                  {act}
                  <button
                    name="delete"
                    onClick={() => {
                      activity.splice(index, 1);
                      this.setState({
                        activity: activity,
                      });
                    }}
                  >
                    X
                  </button>
                </li>
              ));
              return <ul>{todo}</ul>;
            }}
          ></TodoList>
        </Container>
      </div>
    );
  }
}

export default App;

// Modify the TodoList component so that, instead of rendering the items array within the ul tag,
// it calls the function passed to its render prop, passing it the items array as a parameter,
// as well as the function required to delete the item.
// Pass a render prop to the TodoList component to correctly render and interact with the items array.
