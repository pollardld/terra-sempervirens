import React from 'react';
import axios from 'axios';

class TreeForm extends React.Component {
    constructor(props) {
        super(props);
        this.addTree = this.addTree.bind(this);
        // this.updateTreeList = this.updateTreeList.bind(this);
    }

    updateTreeList(citizenId) {
        axios.get(`http://localhost:3300/trees/${citizenId}`)
           .then((response) => {
             this.setState({ 
               treeList: response.data,
             });
             
             console.log(response.data);
           })
           .catch((error) => {
             console.log(error);
           });
       }

    addTree(event) {
        event.preventDefault();

        const citizenId = this.props.citizen._id;

        axios.post('http://localhost:3300/tree', {
            species: event.target.species.value,
            height: event.target.height.value,
            yearPlanted: event.target.yearPlanted.value,
            circumference: event.target.circumference.value,
            citizen: citizenId,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });    

        this.updateTreeList(citizenId);
    }

    render() { 
        return ( 
            <div>
                <div className="">
                    <h2 className="">Add Tree</h2>
                </div>
                
                <div className="row center">
                    <form id="tree-form" onSubmit={this.addTree.bind(this)}>
                        <input placeholder="Species" id="species" name="species" ref="species" type="text" />
                        <input placeholder="Height (cm)" id="height" name="height" ref="height" type="number" />
                        <input placeholder="Circumference (cm)" id="circumference" name="circumference" ref="circumference" type="number" />
                        <input placeholder="Year Planted" id="yearPlanted" name="yearPlanted" ref="yearPlanted" type="number" />
                        <input type="hidden" name="citizen" id="citizen-id" value={this.citizen} />
                        <button className="outline" type="submit" id="tree-form-submit-btn" nme="action">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TreeForm;