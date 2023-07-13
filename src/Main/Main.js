import React from 'react';
import Link from '../Images/link.png';
import Add from '../Images/add.png';
import './Main.css';


const Main = () => {
  return(
    <div className='main'>
        
        <div className='blockLink'>

            <div className='blockLineInside'>
                <div className='Link'>
                    <img src={Link} alt='Gerb Republic of Belarus' />
                    <a href='#'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} alt='Gerb Republic of Belarus' />
                    <a href='#'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} alt='Gerb Republic of Belarus' />
                    <a href='#'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} alt='Gerb Republic of Belarus' />
                    <a href='#'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} alt='Gerb Republic of Belarus' />
                    <a href='#'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} alt='Gerb Republic of Belarus' />
                    <a href='#'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} alt='Gerb Republic of Belarus' />
                    <a href='#'>mns.com</a>
                </div>

                <div className='Link'>
                    <a href='#'>Add</a>
                    <img src={Add} alt='Gerb Republic of Belarus' width="35px" />
                </div>
            </div>


        </div>
       
        <div className='phoneList'>

        </div>

    </div>
  )
}

export default Main;