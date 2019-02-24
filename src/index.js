import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import AppProvider, { AppConsumer } from './Providers/AppProvider';

class App extends Component { 
    render() {
        return(
            <AppConsumer>
                { (value) => (
                    <h1>{value.username}</h1>
                )}
            </AppConsumer>
        )
    }
}

ReactDOM.render(<AppProvider><App/></AppProvider>, document.getElementById('root'));