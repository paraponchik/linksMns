import React from 'react';
import Gerb from '../Images/gerb.png';
import Mns from '../Images/mns.png';
import User from '../Images/user.png';
import './Navbar.css';

const Navbar = () => {
  return(
    <div className='navbar'>

        <div className='gerb'>
          <img src={Gerb} alt='Gerb Republic of Belarus' width="60rem" />
        </div>

        <div className='mns'>
          <img src={Mns} alt='Gerb Ministry of Taxes and Dues' width="60rem" />
        </div>

        <div className='title__logo'>
          <h1>МНС РЕСУРСЫ</h1>
        </div>

        <div className='user'>
          <img src={User} alt='User' width="60rem" />
        </div>

    </div>
  )
}

export default Navbar;