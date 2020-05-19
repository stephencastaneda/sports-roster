import React from 'react';
import './App.scss';
import TeamComponent from '../components/TeamComponent/TeamComponent';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>SPORTS ROSTER</h2>
        <MyNavbar />
        <Auth />
        <TeamComponent />
      </div>
    );
  }
}

export default App;
