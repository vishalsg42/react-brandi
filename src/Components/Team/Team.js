import React, { Component } from 'react';
import TeamBox from '../TeamBox/TeamBox';

import Seperator from '../../assets/images/seperator.png';
import John_Img from '../../assets/images/image_John.jpg';
import Chystine_Img from '../../assets/images/image_Chystine.jpg';
import Martin_Img from '../../assets/images/image_Martin.jpg';
import Steve_Img from '../../assets/images/image_Steve.jpg';



const teamBox = [
  {
    team_img : John_Img,
    team_name: 'John Filmr Doe',
    team_job_post: 'Managing Director',
    team_title: 'Labore et dolore magnam',
    team_social: {
      twitter: 'twitter.com',
      facebook: 'facebook.com',
      google_plus: 'google.com'
    }
  },
  {
    team_img : Martin_Img,
    team_name: 'John Filmr Doe',
    team_job_post: 'Lead Developer',
    team_title: 'Labore et dolore magnam',
    team_social: {
      twitter: 'twitter.com',
      facebook: 'facebook.com',
      google_plus: 'google.com'
    }
  },
  {
    team_img : Steve_Img,
    team_name: 'John Filmr Doe',
    team_job_post: 'Sr. UI Designer',
    team_title: 'Labore et dolore magnam',
    team_social: {
      twitter: 'twitter.com',
      facebook: 'facebook.com',
      google_plus: 'google.com'
    }
  },
  {
    team_img : Chystine_Img,
    team_name: 'John Filmr Doe',
    team_job_post: 'Managing Director',
    team_title: 'Labore et dolore magnam',
    team_social: {
      twitter: 'twitter.com',
      facebook: 'facebook.com',
      google_plus: 'google.com'
    }
  },
]
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
            <TeamBox  teamObj={teamBox}/>
          </div>
      
        </div>
      </section>
    );
  }
}
export default Team;
