import React from "react";

export class ClickTracker extends React.Component{
state = {
    button: 'no pressed button'
}
    handlerTrackEvent=(event)=>{
       this.setState({
        button: event.target.name
       })
    }
    
    render(){
        return(
            <div>
                <button name="button1" onClick={this.handlerTrackEvent}>Button one</button>
                <button name="button2"onClick={this.handlerTrackEvent}>Button two</button>
                <button name="button3" onClick={this.handlerTrackEvent}>Button three</button>
            <div>
            <h4>The last pressed is: {this.state.button}</h4>
            </div>
            </div>
        )
    }
}