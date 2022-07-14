import React from 'react';

const Transformation = (props) => {
  const { img, manga } = props.transformation;
  return (
    <article className='transformation'>
      <img src={img} alt='' height='200' />
      <h4>{manga}</h4>
    </article>
  );
};

export default Transformation;
