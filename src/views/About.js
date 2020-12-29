import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stuff: props.stuff
        }
    }   
    
    
    render() {

        console.log(this.state.stuff);

        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr />
                This is the About page.
                <button onClick={this.state.stuff} d="stuff-btn" className="btn btn-outline-warning">Get Stuff</button>
            </div>
        )
    }
}
