import React from 'react';

class Square extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 0
        }   
    }

    render () {
        return (
            <button className="square"
                onClick={() => {this.setState({value: this.state.value + 1})}}>{this.state.value}</button>
        )
    }
}

export { Square }