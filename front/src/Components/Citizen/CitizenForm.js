import React from 'react';
import axios from 'axios';

class CitizenForm extends React.Component {
    submitCitizenForm(event) {
        event.preventDefault();

        axios.post('http://localhost:3300/citizen', {
            name: event.target.name.value,
            address: event.target.address.value,
        })
        .then((response) => {
            console.log(response);
            this.props.updateCurrentCitizen(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() { 
        return ( 
            <div>
                <div className="">
                    <h2 className="">Get Started</h2>
                    <p>Add your name and address to start logging trees</p>
                </div>
                
                <div className="row center">
                    <form id="citizen-form" onSubmit={this.submitCitizenForm.bind(this)}>
                        <input placeholder="Name" id="name" name="name" ref="name" type="text" />
                        <input placeholder="Address" id="address" name="address" ref="address" type="text" />    
                        <button className="btn waves-effect waves-light" type="submit" nme="action">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CitizenForm;