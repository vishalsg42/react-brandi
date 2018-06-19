import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  Banner  from './Components/Banner/Banner'
import  Feature  from './Components/Feature/Feature'
import  Footer  from './Components/Footer/Footer'
import  Header  from './Components/Header/Header'
import  Team  from './Components/Team/Team'
import  Works  from './Components/Works/Works'

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <Banner />
        <Feature />
        <Footer />
        <Header />
        <Team />
        <Works />
      </div>
    );
  }
}

export default Container;
