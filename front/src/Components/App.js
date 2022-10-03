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
      citizen: '',
      treeList: [],
    }

    this.currentCitizen = this.currentCitizen.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:3300/trees';
    axios.get(url)
      .then((response) => {
        const data = response.data;
        this.setState({ 
          citizen: '', 
          treeList: data 
        });
        console.log('Data has been received');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  currentCitizen(citizen) {
    this.setState({ 
      citizen: citizen,
      treeList: TreeList,
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <CitizenMain />
          <CitizenForm />
          <TreeList treeList={this.state.treeList} />
          <TreeForm />
        </main>
      </div>
    );
  }
}

export default App;
