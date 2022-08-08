import React from "react";
import './index.css';
export class Container extends React.Component{
    render (){
        return (
            <div className="container">
                container
                <div>{this.props.children}</div>
            </div>
        )
    }
}