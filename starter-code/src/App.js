import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ActorList from "./ActorList"
import contactsList from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsList.splice(0, 5) };
  }

  addRandomArtist = () => {
    const { contacts } = this.state;

    const randomNumber = Math.floor(Math.random() * contacts.length);
    contacts.push(contactsList[randomNumber]);
    //console.log(this.state.contacts);
    this.setState({
      contacts
    });
  }

  sortByName(){
    const { contacts } = this.state;

    contactList.sort(function (contactList1, contactList2) {
    if(contactList1.name > contactList2.name) { return 1; }
    if(contactList1.name < contactList2.name) { return -1; }
    this.setState({ 
      contacts
    });
  }
 

  //sortByPopularity = () => {
//}
    

  render() {
    //  let actorCard = this.state.contacts.map(contact => (
    //   <li><img src={contact.pictureUrl}></img>{contact.name}</li>
    //  ))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ () => this.addRandomArtist ()} >Add random Artist</button>
        <button onClick={ () => this.sortByName ()} >Sort by Name</button>
        <button onClick={ () => this.sortByPopularity ()} >Sort by Popularity</button>
        <table>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          {this.state.contacts.map(e => (
            <tr>
              <img src={e.pictureUrl} width="180px" /> {e.name} {e.popularity}
            </tr>
          ))}
        </table>
      </div>
    );
  }

}

export default App;