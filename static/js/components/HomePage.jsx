import React from "react"
import ReactDOM from 'react-dom';
import Summary from './Summary';
import NavBar from './NavBar'
import CurrentListings from './CurrentListings';
import Main from './Main';

class HomePage extends React.Component {
    render(){
      return (
        <div>
        <Main />
        <Summary />
        <CurrentListings />
        </div>

      );
    }
}

export default HomePage
