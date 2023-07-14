import React from 'react';
import Link from '../Images/link.png';
import Add from '../Images/add.png';
import Book from '../Images/book.svg';
import './Main.css';


const Main = () => {
  return(
    <div className='main'>
        
        <div className='blockLink'>

            <div className='blockLineInside'>
                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <a href='https://nalog.gov.by'>Add</a>
                    <img src={Add} className='add' alt='Gerb Republic of Belarus' />
                </div>
            </div>


        </div>
       
        <div className='phoneList'>
            <img src={Book} alt='Gerb Republic of Belarus' />
            <a href='http://web-guit.mns/index.php?option=com_eventtableedit&Itemid=3&choose=2' className='phoneNumb'>Телефонный справочник МНС</a>
        </div>

    </div>
  )
}

export default Main;