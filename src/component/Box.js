import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src="https://kr.element14.com/productimages/standard/en_GB/TL15160-40.jpg" alt="" />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
