import React from 'react';
import Link from '../Images/link.svg';
import Add from '../Images/add.svg';
import Search from '../Images/search.svg';
import './Main.css';


const Main = () => {
  return(
    <div className='main'>
        
        <div className='search'>
            <div className='searchItems'>

                    <div className='searchTxt'>
                        Найти
                    </div>

                    <img src={Search} alt='Search' className='searchImg' />

            </div>
        </div>


        {/*Block of links*/}
        <div className='blockLink'>

            <div className='blockLineInside'>

                <div className='Link'>
                    <a href='https://nalog.gov.by' className='LinkService'>
                        <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                            АИС "Контрольная работа"
                    </a>
                </div>

                <div className='Link'>
                    <a href='https://nalog.gov.by' className='LinkService'>
                        <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                            Bugzilla АИС РН
                    </a>
                </div>

                <div className='Link'>
                    <a href='https://nalog.gov.by' className='LinkService'>
                        <img src={Link} className='LinkImg' alt='Gerb Republic of Belarus' />
                            Bugzilla АИС РН
                    </a>
                </div>
                

                <div className='Link'>
                    <a href='https://nalog.gov.by' className='LinkService'>
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