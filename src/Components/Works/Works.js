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
    gallery_description: 'Photography'
  },
  {
    gallery_img : Stork_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography'
  },
  {
    gallery_img : Militant_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography'
  },
  {
    gallery_img : River_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography'
  },
  {
    gallery_img : Ciel_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography'
  },
  {
    gallery_img : Abstract_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography'
  },
  {
    gallery_img : Toon_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography'
  },
  {
    gallery_img : Drop_img,
    gallery_title: 'Labore et dolore magnam',
    gallery_description: 'Photography'
  }
]


class Works extends Component {
  // constructor() {
  //   super()
  //   // this.getClicked = this.getClicked.bind(this,'parameter')
  // }
  getClicked (e) {
    e.preventDefault();
    console.log(e.target.className);
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
                <a href="#FIXME" className="active"  onClick={this.getClicked} title="All">all</a>
              </li>
              <li>
                <a href="#FIXME" title="Branding" >branding</a>
              </li>
              <li>
                <a href="#FIXME" title="web" >web</a>
              </li>
              <li>
                <a href="#FIXME" title="Logo Design" >logo design</a>
              </li>
              <li>
                <a href="#FIXME" title="Photography"  >photography</a>
              </li>
            </ul>
          </div>
          <GalleryBox galleryData={galleryItem} icon={Icon_Eye}/>
        </section>
    );
  }
}
export default Works;
