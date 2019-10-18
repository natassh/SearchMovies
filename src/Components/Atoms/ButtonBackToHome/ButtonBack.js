import React from 'react';
import './ButtonBackToHome.css';

export const ButtonBack = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button button__fixed">
      Back
    </button>
  );
};
