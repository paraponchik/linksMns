import React from 'react';
import './Footer.css';
import Inst from '../Images/inst.svg';
import Tg from '../Images/tg.svg';
import Youtube from '../Images/youtube.svg';
import PhoneBook from '../Images/phoneBook.svg';


const Footer = () => {
  return(
    <div className='footer'>

      <div className='footerItems'>

        <div className='instagram'>
          <img alt='phone' src={Inst} width="27vm" />
        </div>

        <div className='telegram'>
          <img alt='mail' src={Tg} width="27vm" />
        </div>

        <div className='youtube'>
          <img alt='mail' src={Youtube} width="27vm" />
        </div>

        <div className='phoneBook'>
            <a href='http://web-guit.mns/index.php?option=com_eventtableedit&Itemid=3&choose=2' className='phoneNumb'>
              <img src={PhoneBook} alt='Gerb Republic of Belarus' />
                Телефонный справочник МНС
            </a>
        </div>

        <div className='serviceSis'>
          &#169; 2023 Служба СИС ГУРНО
        </div>

      </div>

    </div>
  )
}

export default Footer;