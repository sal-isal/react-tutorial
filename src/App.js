import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: [],
  }

  render() {
    const { characters } = this.state
    
    return (
      <div className="container">
        <React.StrictMode>
          <Table characterData={characters} removeCharacter={this.removeCharacter}/>
          <Form handleSubmit={this.handleSubmit}/>
        </React.StrictMode>
      </div>
    )

  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

}

export default App