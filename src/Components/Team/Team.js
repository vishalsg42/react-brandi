import React, { Component } from 'react';
import Seperator from '../../assets/images/seperator.png';
import John_Img from '../../assets/images/image_John.jpg';
import Chystine_Img from '../../assets/images/image_Chystine.jpg';
import Martin_Img from '../../assets/images/image_Martin.jpg';
import Steve_Img from '../../assets/images/image_Steve.jpg';
import Twitter_Img from '../../assets/images/icon_Twitter.png';
import FB_Img from '../../assets/images/icon_FB.png';
import Google_Img from '../../assets/images/icon_G.png';

class Team extends Component {
  render() {
    return (
      <section className="team-section">
        <div className="wrapper">
          <h2>Meet Our Team</h2>
           <div className="feature-icon">
            <img src={Seperator} alt="featureIcon"/>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          </p>

          <div className="team-content">
            <div className="team-box">
              <div className="team-img">
                <img src={John_Img} alt="jhonyMember"/>
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Nemo enim ipsam voluptatem quia voluptas</p>
                    <p>sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione, voluptatem</p>
                    <ul className="socila-nav">
                      <li>
                        <a href="#FIXME" title="Twitter">
                          <img src={Twitter_Img} alt="twitter"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Facebook">
                          <img src={FB_Img} alt="facebook"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Google Plus">
                          <img src={Google_Img} alt="googlePlus"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>John Filmer Doe</h3>
              <p>Managing Director</p>
            </div>
            <div className="team-box">
              <div className="team-img">
                <img src={Chystine_Img} alt="ChystineMember"/>
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Nemo enim ipsam voluptatem quia voluptas</p>
                    <p>sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione, voluptatem</p>
                    <ul className="socila-nav">
                      <li>
                        <a href="#FIXME" title="Twitter">
                          <img src={Twitter_Img} alt="twitter"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Facebook">
                          <img src={FB_Img} alt="facebook"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Google Plus">
                          <img src={Google_Img} alt="googlePlus"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>Chystine Hineu</h3>
              <p>Lead Designer</p>
            </div>
            <div className="team-box">
              <div className="team-img">
                <img src={Martin_Img} alt="martinMember"/>
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Nemo enim ipsam voluptatem quia voluptas</p>
                    <p>sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione, voluptatem</p>
                    <ul className="socila-nav">
                      <li>
                        <a href="#FIXME" title="Twitter">
                          <img src={Twitter_Img} alt="twitter"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Facebook">
                          <img src={FB_Img} alt="facebook"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Google Plus">
                          <img src={Google_Img} alt="googlePlus"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>Martin Matrone</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-box">
              <div className="team-img">
                <img src={Steve_Img} alt="steveMember"/>
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Nemo enim ipsam voluptatem quia voluptas</p>
                    <p>sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione, voluptatem</p>
                    <ul className="socila-nav">
                      <li>
                        <a href="#FIXME" title="Twitter">
                          <img src={Twitter_Img} alt="twitter"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Facebook">
                          <img src={FB_Img} alt="facebook"/>
                        </a>
                      </li>
                      <li>
                        <a href="#FIXME" title="Google Plus">
                          <img src={Google_Img} alt="googlePlus"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>Steve Faulkin</h3>
              <p>Sr. UI Designer</p>
            </div>
          </div>
          <div className="tab-box">
            <span className="tab-dot fa fa-circle"></span>
            <span className="tab-dot fa fa-circle"></span>
            <span className="tab-dot fa fa-circle"></span>
          </div>
        </div>
      </section>
    );
  }
}
export default Team;
