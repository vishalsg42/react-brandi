import React from 'react';

const Logobox = (props)=>{
  return (
    <div className="logo">
      <h1>
        <a href="#FIXME" title="Brandi Logo">
          <img src={props.logoImg} alt={props.imgtext} />
        </a>
      </h1>
      <span>I am your tag line</span>
    </div>
  )
}
export default Logobox;
