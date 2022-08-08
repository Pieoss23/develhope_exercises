import React from "react";
import './index.css';
export class Container extends React.Component{
    render (){
        return (
            <div className="container">
                <h2>{this.props.title}</h2>
                <div>{this.props.children}</div>
            </div>
        )
    }
}