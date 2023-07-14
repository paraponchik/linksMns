import React from 'react';
import './Footer.css';


const Footer = () => {
  return(
    <div className='footer'>

      <div className='footerItems'>
        <h1>
          Служба СИС главного управления развития налоговых органов
        </h1>

        <div className='generalNumberServices'>
          <img alt='phone' />

          <div className='numberServices'>
            229-79-99
          </div>
        </div>

        <div className='generalMailServices'>
          <img alt='mail' />

          <div className='mailServices'>
            gotov@nalog.gov.by
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer;