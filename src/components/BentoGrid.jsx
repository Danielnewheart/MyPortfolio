import React from 'react';
import '../styles/BentoGrid.css'; 

const BentoGrid = ({ children }) => {
  return <div className='bento-grid__container'><div className="bento-grid">{children}</div></div>;
};

export default BentoGrid;