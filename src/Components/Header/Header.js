import React, { Component } from 'react';
import Logobox from '../LogoBox/LogoBox';
import Brandilogo from '../../assets/images/Brandi_logo.png';
import { Route, Link } from 'react-router-dom';

import  Feature  from '../Feature/Feature';
import  Team  from '../Team/Team';
import  Works  from '../Works/Works'

// const navItem = ['Home','Features','Works','Team','Contact']
// const NavListItem = (props)=> {
//   let item = props.navText.map((navList,index) => {
//     return  (<li key={index}>
//       <Link to='/works'>{navList}</Link>
//       <Route path='/works' component={Works} />
//     </li>)
//   });
//   return <ul className='menu-item'>{item}</ul>;
// }
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
class Header extends Component {

  render() {
    return (
      <header>
        <div className="wrapper cf">
          <Logobox logoImg={Brandilogo} imgtext={'Brandi Logo'}/>
          <nav>
              {/* <NavListItem navText={navItem} /> */}
              <ul className="menu-item">
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/features'>Features</Link>
                </li>
                <li>
                  <Link to='/works'>Works</Link>
                </li>
                <li>
                  <Link to='/team'>Team</Link>
                </li>
                <li>
                  <Link to='/topics'>Topics</Link>
                </li>
              </ul>
            <Route path='/features' component={Feature} />
            <Route path='/works' component={Works} />
            <Route path='/team' component={Team} />
            <Route path="/topics" component={Topics} />
          </nav>
        </div>
      </header>
    );
  }
}



export default Header;
