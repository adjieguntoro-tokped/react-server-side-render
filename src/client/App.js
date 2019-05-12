import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    };
  }

  handleNameChange = e => {
    const { value } = e.target;

    this.setState({
      name: value,
    });
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <input
          type="text"
          id="nameFeilf"
          name="name"
          value={name}
          onChange={this.handleNameChange}
        />
        <div> {name} </div>
      </div>
    )
  }
}

export default App;
