import React, { Component } from 'react';

import PoemList from './PoemList';
import './app.css';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    poems: []
  };

  componentDidMount(){
    fetch('http://poetrydb.org/author').then(results => {
      console.log("this are authors ", results.json())
        
    });
}


  render() {

    return (
      <div className="App">
        <header>
          <h1>Poetry Hub</h1>
          <p>A Bonifase App</p>
          <form onSubmit={this.newGuestSubmitHandler}>
            <input
              type="text"
              onChange={this.handleNameInput}
              value={this.state.pendingGuest}
              placeholder="Search your Author" />
            <button type="submit" name="submit" value="submit">Search</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered} /> Hide those who haven't responded
            </label>
          </div>


          <PoemList
            poems={this.state.poems} 
          />

        </div>
      </div>
    );
  }
}

export default App;
