import React, { Component } from 'react';
import Logobox from '../LogoBox/LogoBox';
import Brandilogo from '../../assets/images/Brandi_logo.png';

const navItem = ['Home','Features','Works','Team','Contact']
const NavListItem = (props)=> {
  let item = props.navText.map((navList,index) => {
    return  (<li key={index}>
      <a href="#FIXME" title={navList}>{navList}</a>
    </li>)
  });
  return <ul className='menu-item'>{item}</ul>;
}

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper cf">
          <Logobox logoImg={Brandilogo} imgtext={'Brandi Logo'}/>
          <nav>
            <a href="#FIXME" className="fa fa-bars nav-menu"></a>
            <NavListItem navText={navItem} />
          </nav>
        </div>
      </header>
    );
  }
}



export default Header;
