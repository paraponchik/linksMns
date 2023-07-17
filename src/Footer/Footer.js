import React from 'react';
import './Footer.css';
import Number from '../Images/phone.svg';
import Dog from '../Images/dog.svg';


const Footer = () => {
  return(
    <div className='footer'>

      <div className='footerItems'>
        <h1 className='Title'>
          Служба СИС главного управления развития налоговых органов
        </h1>

        <div className='generalNumberServices'>


          <div className='numberServices'>
            229-79-99
          </div>
          <img alt='phone' src={Number} width="25px" />
        </div>

        <div className='generalMailServices'>


          <div className='mailServices'>
            gotov@nalog.gov.by
          </div>

          <img alt='mail' src={Dog} width="25px" />
        </div>

      </div>

    </div>
  )
}

export default Footer;