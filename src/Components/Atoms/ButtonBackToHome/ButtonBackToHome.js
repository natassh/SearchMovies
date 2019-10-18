import React from 'react';
import { Link } from 'react-router-dom';

import './ButtonBackToHome.css';

export const ButtonBackToHome = () => {
  return (
    <Link className="button button__fixed" to="/">
      Back to home
    </Link>
  );
};
