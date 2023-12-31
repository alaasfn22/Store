import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './ButtonTop.css';

const ButtonTop = () => {
  useEffect(() => {
    const btnTopValue = document.getElementById('btnTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY < 120) {
        btnTopValue.style.display = 'none';
      }
      else {
        btnTopValue.style.display = 'block';
      }
    })
    btnTopValue.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  }, [])
  return (
    <div className='home-button-top' id='btnTop'>
      <a href='#header'><FontAwesomeIcon icon={faAngleUp} className='up-icon text-white' /></a>
    </div>
  )
}
export default ButtonTop;
