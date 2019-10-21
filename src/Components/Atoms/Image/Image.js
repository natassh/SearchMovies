import React from 'react';
import './Image.css';

const Image = ({ className = '', children }) => {
  const classes = `${className} image`;
  return <figure className={classes}>{children}</figure>;
};

export { Image };
