import React from 'react';


const GalleryBox = (props)=> {
  let {galleryData} = props;
  let galleryItem = galleryData.map((item,index)=>{
    return (
      <div key={index} className="gallery-box">
        <img src={item.gallery_img} alt="Kon" className="gallery-img"  />
        <div className="overlay">
          <div className="overlay-content">
            <img src={props.icon} alt="Eye icon" />
              <h3>{item.gallery_title}</h3>
              <p>{item.gallery_description}</p>
          </div>
        </div>
      </div>
    )

  });
  return (
        <div className="work-gallery">
            {galleryItem}
        </div>
  );
}

export default GalleryBox;
