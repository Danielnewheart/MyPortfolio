import React from 'react';
import '../styles/BentoGrid.css'; // 假設CSS文件名為BentoGridItem.css

const BentoGridItem = ({ width=1, height=1, children='' }) => {
  const style = {
    gridColumn: `span ${width}`,
    gridRow: `span ${height}`,
  };

  return (
    <div className="bento-grid-item" style={style}>
      {children}
    </div>
  );
};

export default BentoGridItem;