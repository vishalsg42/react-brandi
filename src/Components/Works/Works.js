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

class Works extends Component {
  render() {
    return (
       // work
        <section className="work-section">
          <div className="wrapper">
            <h2>Works</h2>
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
                <a href="#FIXME" className="active" title="All">all</a>
              </li>
              <li>
                <a href="#FIXME" title="Branding">branding</a>
              </li>
              <li>
                <a href="#FIXME" title="web">web</a>
              </li>
              <li>
                <a href="#FIXME" title="Logo Design">logo design</a>
              </li>
              <li>
                <a href="#FIXME" title="Photography">photography</a>
              </li>
            </ul>
          </div>
          <div className="work-gallery">
            <div className="gallery-box">
              <img src={Kong_img} alt="Kon" className="gallery-img" className="kongAnimal" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
            <div className="gallery-box">
              <img src={Stork_img} className="gallery-img" alt="storkBird" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
            <div className="gallery-box">
              <img src={River_img} className="gallery-img" alt="riverFLow" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
            <div className="gallery-box">
              <img src={Drop_img} className="gallery-img" alt="dropOcean" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
            <div className="gallery-box">
              <img src={Militant_img} className="gallery-img" alt="millitantArmy" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
            <div className="gallery-box">
              <img src={Ciel_img} className="gallery-img" alt="ciel" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
            <div className="gallery-box">
              <img src={Abstract_img} className="gallery-img" alt="abrstract" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
            <div className="gallery-box">
              <img src={Toon_img} className="gallery-img" alt="toon" />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={Icon_Eye} alt="Eye icon" />
                    <h3>Labore et dolore magnam</h3>
                    <p>Photography</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
export default Works;