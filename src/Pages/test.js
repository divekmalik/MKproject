
import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: event.key1,
      createdAt: Date.now(),
      firstname: event.key2,
      lastname: event.key3,
      msgtxt: event.key4
    };  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCorpusChange = this.handleCorpusChange.bind(this);
    this.handleSourceChange = this.handleSourceChange.bind(this);
  }

  handleCorpusChange = (event) => {
    this.setState({
      Corpus_Name: event.target.value
    });
  }

  handleSourceChange = (event) => {
    this.setState({
      Source_Name: event.target.value
    });
  }



  async handleSubmit(event) {
    event.preventDefault();
    const { Corpus_Name, Source_Name } = this.state;
    await axios.post('https://u8ms5rcq1l.execute-api.us-east-1.amazonaws.com/test',
      { key1: `${Corpus_Name}, 
        key2: ${Source_Name}
        
        ` }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Corpus_Name:</label>
          <input
            type="text"
            name="Corpus_Name"
            onChange={this.handleCorpusChange}
            value={this.state.Corpus_Name}

          />

          <label>Source_Name:</label>
          <input
            type="text"
            name="Source_Name"
            onChange={this.handleSourceChange}
            value={this.state.Source_Name}

          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}