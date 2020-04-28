import React from 'react';
import { Form } from './components/form/Form.component';
import { NameItem } from './components/name-item/NameItem.component';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      names: [],
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  addNameToList = () => {
    const names = this.state.names;
    console.log('before', names);
    names.push(this.state.name);
    console.log('after', names);
    this.setState({
      names,
      name: '',
    });
  };

  deleteName = (currentName) => {
    const names = this.state.names.filter(
      (name) => name !== currentName
    );
    this.setState({ names });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addNameToList();
  };

  render() {
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
        />
        <ul>
          {this.state.names.map((name) => (
            <NameItem
              key={name}
              name={name}
              deleteName={this.deleteName}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
