import React, { Component } from 'react'

const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

class AppProvider extends Component {

    state = {
      username: 'pavvo',
      dateJoined: '9/1/18',
      membershipLevel: 'Silver'
    }

    render () {
      return (
        // value prop is where we define what values 
        // that are accessible to consumer components
         <AppContext.Provider value={this.state}>
          {this.props.children}
        </AppContext.Provider>
      )
    }
  }
  export default AppProvider