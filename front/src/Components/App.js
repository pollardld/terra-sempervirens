import React from 'react';
import axios from 'axios';
import './App.css';
import CitizenMain from './Citizen/CitizenMain';
import CitizenForm from './Citizen/CitizenForm';
import TreeList from './Tree/TreeList';
import TreeForm from './Tree/TreeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCitizen: {},
      treeList: [],
      currentTree: {},
      hasCitizenId: false,
    }

    this.updateCurrentCitizen = this.updateCurrentCitizen.bind(this);
    this.updateTreeList = this.updateTreeList.bind(this);
  }

  componentDidMount() {
    
    // axios.get(url)
    //   .then((response) => {
    //     const data = response.data;
    //     this.setState({ 
    //       currentCitizen: data, 
    //     });
    //     console.log('Data has been received');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  updateCurrentCitizen(citizen) {
    this.setState({ 
      currentCitizen: citizen,
      hasCitizenId: true,
    });
  }

  getSingleTree(tree) {
    this.setState({
      currentTree: tree,
    });
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
  

  shownComponents(hasCitizenId) {
    let shownComponents = [];

    if (!hasCitizenId) {
      shownComponents = [
        <CitizenForm currentCitizen={this.state.currentCitizen} updateCurrentCitizen={this.updateCurrentCitizen} hasCitizenId={this.state.hasCitizenId} />
      ];
    } else {
      shownComponents = [
        <TreeForm citizen={this.state.currentCitizen} hasCitizenId={this.state.hasCitizenId} />,
        <TreeList treeList={this.state.treeList} getSingleTree={this.getSingleTree} updateTreeList={this.updateTreeList} />
      ];
    }

    return shownComponents;
  }

  render () {
    const hasCitizenId = this.state.hasCitizenId;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Terra Sempervirens</h1>
          <nav></nav>
        </header>
        <main>
          <div class="pure-g">
            <section class="pure-u-1-1">
              <CitizenMain updateCurrentCitizenMain={this.state.currentCitizen} hasCitizenId={this.state.hasCitizenId} />
            </section>
            <section class="pure-u-1-1">
              {this.shownComponents(hasCitizenId)}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
