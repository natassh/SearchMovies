import React from 'react';
import { ButtonBackToHome } from '../../Components/Atoms/ButtonBackToHome/ButtonBackToHome';

export const PageError = () => {
  return (
    <>
      <h1 className="title">404!</h1>
      <h2>Sorry, the page doesn't exist</h2>
      <ButtonBackToHome />
    </>
  );
};
