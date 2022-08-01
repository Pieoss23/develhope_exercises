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

    render() {
        return (
            <div>
                <ul>
                    {this.state.activity.map((act, index) => <li key={act + index}>{act}</li>)}
                </ul>

                <input type="text"
                       name="username"
                       onChange={this.handleInput}
                       value={this.state.newActivity}
                       />

                <button onClick={this.handleAdding} disabled={!(this.state.newActivity)}>+ activity</button>
            </div>
        )
    }
}