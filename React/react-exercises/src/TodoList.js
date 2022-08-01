import React from "react";


export class TodoList extends React.Component{
    state = {
        activity: ['Wake up', 'Study React', 'Eat healty food', 'Call mum', 'Go sleep'],
        newActivity: '',
    }
    
    // to write in the input box we 've to targeting the state to change value
    handleInput = (e) => {
        this.setState({
            newActivity: e.target.value
        })
    }


    // to add a new activity in activity's array
    handleAdding = () => {
        this.setState({
            activity: [...this.state.activity, this.state.newActivity],
            newActivity: ""
        })
    }
    handleResetState = () => {
        this.setState({
         activity: []
        });
      };

      handleDelete = (event) => {
        const newArray = this.state.activity;
        newArray.splice(event.target.value, 1);
        this.setState({
          activity: newArray,
        });
      };
   
    render() {
        return (
            <div>
                <ul>
                    {this.state.activity.map((act, index) => <li key={act + index}>{act} <button value={index} onClick={this.handleDelete}>X</button></li>)}
                    
                </ul>

                <input type="text"
                       name="username"
                       onChange={this.handleInput}
                       value={this.state.newActivity}
                       />
                <button onClick={this.handleResetState}>reset</button>
                <button onClick={this.handleAdding} disabled={!(this.state.newActivity)}>+ activity</button>
            </div>
        )
    }
}