import React, { useState } from 'react';
import '../styles/hoverableDoubleImage.css'; // 引入CSS檔案

function HoverableDoubleImages(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { defaultImage, hoverImage, defaultAlt, hoverAlt, defaultClass, hoverClass } = props;

  return (
    <div
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
      onClick={() => setIsHovered(!isHovered)}
      className="image-container" 
    >
      {/* <img src={imageSrc} alt={imageAlt} key={imageKey} className="image fade-in"/> */}
      <img src={defaultImage} alt={defaultAlt} className={`image ${isHovered ? 'hidden' : ''} ${defaultClass}`} height={454} width={454}/>
      <img src={hoverImage} alt={hoverAlt} className={`image ${isHovered ? '' : 'hidden'} ${hoverClass}`} height={454} width={454}/>
    </div>
  );
}

export default HoverableDoubleImages;