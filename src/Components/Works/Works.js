import React, { Component } from 'react';
import Kong_img from '../../assets/images/image_kong.jpg';
import Stork_img from '../../assets/images/image_stork.jpg';
import Militant_img from '../../assets/images/image_militant.jpg';
import River_img from '../../assets/images/image_river.jpg';
import Drop_img from '../../assets/images/image_drop.jpg';
import Ciel_img from '../../assets/images/image_ceil.jpg';
import Abstract_img from '../../assets/images/image_abstract.jpg';
import Toon_img from '../../assets/images/image_toon.jpg';
import Seperator from '../../assets/images/seperator.png';
import Icon_Eye from '../../assets/images/icon_Eye.png';

import GalleryBox from '../GalleryBox/GalleryBox';

const componentTitle = 'Works';
const galleryItem = [
  {
    gallery_img : Kong_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'branding'
  },
  {
    gallery_img : Stork_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'web'
  },
  {
    gallery_img : River_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'logo design'
  },
  {
    gallery_img : Drop_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'Photography'
  },
  {
    gallery_img : Militant_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'branding'
  },
  {
    gallery_img : Ciel_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'web'
  },
  {
    gallery_img : Abstract_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'logo design'
  },
  {
    gallery_img : Toon_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography',
    gallery_category: 'Photography'
  },
]


class Works extends Component {
  constructor() {
    super()
    this.state = {
      galleryItem: galleryItem,
      isActive: false
    }
    this.textInput = React.createRef();
  }
  getClicked =(e)=> {
    e.preventDefault();
    let item = galleryItem;
    let filter = e.target.dataset.filter;
    console.log();
    let galleryFinalitem = item.filter((gItem)=>{
      return filter === 'all' ? gItem : gItem.gallery_category.toLowerCase() === filter.toLowerCase();
    })
    this.setState({
      galleryItem : galleryFinalitem,
    })

  };
  render() {
    return (
       // work
        <section className="work-section">
          <div className="wrapper">
            <h2>{componentTitle}</h2>
             <div className="feature-icon">
              <img src={Seperator} alt="featureIcon" />
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            </p>
            <select className="nav-menu-mobi">
              <option value="all">All</option>
              <option value="web">Branding</option>
              <option value="Log Design">Logo Design</option>
              <option value="Photography">Photography</option>
            </select>

            <ul className="work-nav">
              <li>
                <a href="#FIXME" ref='all'  className={this.isActive ? 'active' : ''} data-filter='all'  onClick={(e)=> this.getClicked(e)} title="All">all</a>
              </li>
              <li>
                <a href="#FIXME" className={this.isActive ? 'active' : ''} data-filter='branding' onClick={(e)=> this.getClicked(e)} title="Branding" >branding</a>
              </li>
              <li>
                <a href="#FIXME" className={this.isActive ? 'active' : ''} data-filter='web'  onClick={(e)=> this.getClicked(e)} title="web" >web</a>
              </li>
              <li>
                <a href="#FIXME" className={this.isActive ? 'active' : ''} data-filter='logo design' onClick={(e)=> this.getClicked(e)}  title="Logo Design" >logo design</a>
              </li>
              <li>
                <a href="#FIXME" className={this.isActive ? 'active' : ''} data-filter='photography' onClick={(e)=> this.getClicked(e)} title="Photography"  >photography</a>
              </li>
            </ul>
          </div>
          <GalleryBox galleryData={this.state.galleryItem}  icon={Icon_Eye}/>
        </section>
    );
  }
}
export default Works;
