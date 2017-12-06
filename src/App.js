import React, { Component } from 'react';
import './App.css';
import Show from './components/Show'
import EditFirst from './components/EditFirst'
import EditLast from './components/EditLast'
import EditUrl from './components/EditUrl'

class App extends Component {
  // Model
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
      isShowOn: true
  }

  // Controller actions

  // When user types in text field
  // This function is called
  // The event provides information about what happened
  onChangeFirstName = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newFirstName = input.value

    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, firstName: newFirstName }
      return {
        // this.state.user will be updated
        user: newUser
      }
    })
  }
  onChangeLastName = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newLastName = input.value
    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, lastName: newLastName }
      return {
        // this.state.user will be updated
        user: newUser
      }
    })
  }

  onChangeprofileImageURL = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newprofileImageURL = input.value
    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, profileImageURL: newprofileImageURL }
      return {
        // this.state.user will be updated
        user: newUser
      }
    })
  }

  handleToggle = (event) => {

    this.setState(prevState => ({
      isShowOn: !prevState.isShowOn
    }));
}


  // View

  render() {
    const user = this.state.user
    let { isShowOn } = this.state


    return (
      <div className="App">
      <Show {...user}/>
      <button type="button" onClick={this.handleToggle} >
        {isShowOn ? 'Edit' : 'Show'}
      </button>
      {
        isShowOn
        ? null :
        <div>
          <EditFirst {...user} onChangeFirstName={(event) => {this.onChangeFirstName(event)}} />
          <EditLast {...user} onChangeLastName={(event) => {this.onChangeLastName(event)}}/>
          <EditUrl {...user} onChangeprofileImageURL={(event) => {this.onChangeprofileImageURL(event)}}/>
        </div>
      }
      </div>
    );
  }
}

export default App;
