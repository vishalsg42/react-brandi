import React, { Component } from 'react';
import Seperator from '../../assets/images/seperator.png';
import Icon_Branding from '../../assets/images/icon_1.png';
import Icon_Development from '../../assets/images/icon_2.png';
import Icon_Consulting from '../../assets/images/icon_3.png';

class Feature extends Component {
  render() {
    return (
    <section className="feature-section">
        <div className="wrapper">
          <h2>Features</h2>
          <div className="feature-icon">
            <img src={Seperator} alt="featureIcon" />
          </div>
          <div className="feature-content">
            <div className="feature-box">
              <div className="feature-box-icon">
                <img src={Icon_Branding} alt="branding" />
              </div>
                <div className="feature-box-content">
                  <h3>Branding</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  </p>
                </div>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">
                <img src={Icon_Development} alt="development" />
              </div>
              <div className="feature-box-content">
                <h3>Development</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">
                <img src={Icon_Consulting} alt="consulting" />
              </div>
              <div className="feature-box-content">
                <h3>Consulting</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                </p>
              </div>
            </div>
            <div className="tab-box">
              <span className="tab-dot fa fa-circle"></span>
              <span className="tab-dot fa fa-circle"></span>
              <span className="tab-dot fa fa-circle"></span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Feature;
