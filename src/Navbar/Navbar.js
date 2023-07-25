import React from 'react';
import Gerb from '../Images/gerb.svg';
import Mns from '../Images/mns.svg';
import User from '../Images/user.svg';
import './Navbar.css';

const Navbar = () => {
  return(
    <div className='navbar'>

        <div className='gerb'>
          <img src={Gerb} alt='Gerb Republic of Belarus' />
        </div>

        <div className='mns'>
          <img src={Mns} alt='Gerb Ministry of Taxes and Dues' />
        </div>

        <div className='title__logo'>
          <h1>МНС РЕСУРСЫ</h1>
        </div>

        <div className='user'>
          <img src={User} alt='User' />
        </div>

    </div>
  )
}

export default Navbar;