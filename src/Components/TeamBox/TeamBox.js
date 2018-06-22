import React from 'react';
import Twitter_Img from '../../assets/images/icon_Twitter.png';
import FB_Img from '../../assets/images/icon_FB.png';
import Google_Img from '../../assets/images/icon_G.png';

const TeamBox = (props)=> {
  let {teamObj} = props;
  let teamDetails = teamObj.map((data,index)=>{
    return (
          <div key={index} className="team-box">
            <div className="team-img">
              <img src={data.team_img} alt="jhonyMember"/>
              <div className="overlay">
                <div className="overlay-content">
                  <p>Nemo enim ipsam voluptatem quia voluptas</p>
                  <p>sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione, voluptatem</p>
                  <ul className="socila-nav">
                    <li>
                      <a href={data.team_social.twitter} target="_blank" title="Twitter">
                        <img src={Twitter_Img} alt="twitter"/>
                      </a>
                    </li>
                    <li>
                      <a href={data.team_social.facebook} target="_blank" title="Facebook">
                        <img src={FB_Img} alt="facebook"/>
                      </a>
                    </li>
                    <li>
                      <a href={data.team_social.google_plus} target="_blank" title="Google Plus">
                        <img src={Google_Img} alt="googlePlus"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3>{data.team_name}</h3>
            <p>{data.team_job_post}</p>
          </div>
    )
  })
    return (

        <section className="">{teamDetails}</section>
    );
}
export default TeamBox;
