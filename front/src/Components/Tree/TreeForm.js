import React from 'react';
import axios from 'axios';

class TreeForm extends React.Component {
    addTree(event) {
        event.preventDefault();

        axios.post('http://localhost:3300/tree', {
            species: event.target.species.value,
            height: event.target.height.value,
            yearPlanted: event.target.yearPlanted.value,
            circumference: event.target.circumference.value,
            citizen: event.target.citizen.value,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() { 
        return ( 
            <div>
                <div className="">
                    <h2 className="">Add Tree</h2>
                    <p>Add a tree</p>
                </div>
                
                <div className="row center">
                    <form id="tree-form" onSubmit={this.addTree.bind(this)}>
                        <input placeholder="Species" id="species" name="species" ref="species" type="text" />
                        <input placeholder="Height (cm)" id="height" name="height" ref="height" type="number" />
                        <input placeholder="Circumference (cm)" id="circumference" name="circumference" ref="circumference" type="number" />
                        <input placeholder="Year Planted" id="yearPlanted" name="yearPlanted" ref="yearPlanted" type="number" />
                        <input type="hidden" name="citizen" id="citizen-id" value="{citizen}" />
                        <button className="outline" type="submit" id="tree-form-submit-btn" nme="action">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TreeForm;