import React from 'react';
import './Footer.css';
import Number from '../Images/phone.svg';
import Dog from '../Images/dog.png';


const Footer = () => {
  return(
    <div className='footer'>

      <div className='footerItems'>

        <div className='instagram'>
          <img alt='phone' src={Inst} width="27vm" />
        </div>

          <div className='numberServices'>
            229-79-99
          </div>
          <img alt='phone' src={Number} width="22vm" />
        </div>

        <div className='generalMailServices'>

          <div className='mailServices'>
            gotov@nalog.gov.by
          </div>

          <img alt='mail' src={Dog} width="27vm" />
        </div>

      </div>
  )
}

export default Footer;