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
    }

    this.updateCurrentCitizen = this.updateCurrentCitizen.bind(this);
  }

  componentDidMount() {
    // const url = `http://localhost:3300/citizen/${this.state.currentCitizen._id}`;
    console.log(this);
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

      axios.get('http://localhost:3300/trees')
        .then((response) => {
          this.setState({ 
            treeList: response.data, 
          });
        })
        .catch((error) => {
          console.log(error);
        });
  };

  updateCurrentCitizen(citizen) {
    this.setState({ 
      currentCitizen: citizen,
    });
  }

  updateTreeList(tree) {
    this.setState({
      treeList: [tree],
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <nav> </nav>
        </header>
        <main>
          <div class="pure-g">
            <section class="pure-u-1-1">
              <h1>App</h1>
              <CitizenMain citizen={this.state.currentCitizen} updateCurrentCitizen={this.updateCurrentCitizen} />
            </section>
            <section class="pure-u-1-1">
              <CitizenForm citizen={this.state.currentCitizen} updateCurrentCitizen={this.updateCurrentCitizen} />
            </section>
            <section class="pure-u-1-1">
              <TreeList treeList={this.state.treeList} updateTreeList={this.state.treeList} />
            </section>
            <section class="pure-u-1-1">
              <TreeForm citizen={this.state.currentCitizen} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
