import React from 'react';

class TreeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            species: '',
            height: '',
            yearPlanted: '',
            circumference: '',
            citizen: '',
        }
    }
    render() {
        return (
            <div>
                <h1>TreeForm</h1>
            </div>
        );
    }
}

export default TreeForm;