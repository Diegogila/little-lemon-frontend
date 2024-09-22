import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Goback.css'

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    console.log('back');
    navigate(-1);
  };

  return (
    <button className='header-button go-back' onClick={handleGoBack}>
    </button>
  );
};

export default GoBack;