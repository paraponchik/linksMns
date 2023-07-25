import React from 'react';
import Link from '../Images/link.svg';
import Add from '../Images/add.svg';
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
                    <a href='https://nalog.gov.by'>
                        <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                            mns.com
                    </a>
                </div>

                <div className='Link'>
                    <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                    <a href='https://nalog.gov.by'>mns.com</a>
                </div>

                <div className='Link'>
                    <a href='https://nalog.gov.by'>
                            Add
                        <img src={Add} className='add' alt='Gerb Republic of Belarus' />
                    </a>
                </div>

            </div>

        </div>
       
                <div className='pagination'>
                    <div className='paginationInsert'>
                        <div className='pagCircle'>
                            1
                        </div>
                    </div>  
                </div>

    </div>
  )
}

export default Main;