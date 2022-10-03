import React from 'react';

class CitizenForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
        }
    }
    render() {
        return (
            <div>
                <h1>CitizenForm</h1>
            </div>
        );
    }
}

export default CitizenForm;