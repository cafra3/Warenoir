import React from "react"
import ReactDOM from 'react-dom';
import Summary from './Summary';
import App from './App';
import CurrentListings from './CurrentListings';

class HomePage extends React.Component {
    render(){
      return (
        <div>
        <App />
        <Summary />
        <CurrentListings />
        </div>

      );
    }
}

export default HomePage
