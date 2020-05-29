import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import googlePlay from '../../assets/icons/googlePlay.png';
import appStore from '../../assets/icons/appStore.png';
import facebook from '../../assets/icons/facebook.png';
import googlePlus from '../../assets/icons/googlePlus.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedIn.png';
import twitter from '../../assets/icons/twitter.png';
import Styles from './styles.scss';

const Footer = () => {

      return (
         <section className={`col-12 ${Styles.footer}`}>
            <div className={`row ${Styles.subFooter}`}>
               <div className='col-1'></div>
               <div className='col-4'>
                  <span>
                  {locales('titles.infoJobjoo')}
                  </span>
                  <p className={`${Styles.text}`}>
                  {locales('titles.infoJobjooText')}
                  </p>
               </div>
               <div className='col-3'>
                  <div className='row'>
                     <span>
                     {locales('titles.importantLinks')}
                  </span>
                  <input type="checkbox" className="custom-control-input" id="customControlValidation1" required/>

                  </div>
                  <div className={`row ${Styles.importantLinks}`}>
                     <div className='col-5'>
                        <Link to='/' className={`${Styles.spicial}`}>
                        {locales('titles.goToHomePage')}
                        </Link>

                     </div>
                     <div className='col-5'>
                        <Link to='/'>
                        {locales('titles.support')}
                        </Link>

                     </div>
                     <div className='col-5'>
                        <Link to='/'>
                        {locales('titles.signUp/login')}
                        </Link>

                     </div>
                     <div className='col-5'>
                        <Link to='/'>
                        {locales('titles.contactUs')}
                        </Link>

                     </div>
                     <div className='col-5'>
                        <Link to='/'>
                        {locales('titles.guide')}
                        </Link>

                     </div>
                     <div className='col-5'>
                        <Link to='/'>
                        {locales('titles.aboutUs')}
                        </Link>

                     </div>
                  </div>

               </div>
               <div className={`col-3 ${Styles.infoApp}`}>
                  <span>
                     نرم افزار موبایل
                  </span>
                  <p className={`${Styles.text}`}>
                     نرم افزار های موبایل جاب جو برای اندروید و آی او اس
                  </p>
                  <Link to='/'>
                     <img alt='google-play' src={googlePlay} width="100%" />
                  </Link>
                  <Link to='/'>
                     <img alt='app-store' src={appStore} width="100%" />
                  </Link>
               </div>
            </div>
            <div className={`row ${Styles.subFooter}`}>
               <p className={`col-5 ${Styles.copyWrite}`}>
                  تمامی حقوق برای جاب جو محفوظ است . ۱۳۹۷
               </p>
               <div className='col-3'></div>
               <div className={`col-3 ${Styles.socialLinks}`}>
                  <Link to='/'>
                     <img alt='facebook-icon' src={facebook} width="35px" height='35px' />
                  </Link>
                  <Link to='/'>

                     <img alt='googlePlus-icon' src={googlePlus} width="35px" height='35px' />
                  </Link>
                  <Link to='/'>

                     <img alt='instagram-icon' src={instagram} width="35px" height='35px' />
                  </Link>
                  <Link to='/'>

                     <img alt='linkedin-icon' src={linkedin} width="35px" height='35px' />
                  </Link>
                  <Link to='/'>

                     <img alt='twitter-icon' src={twitter} width="35px" height='35px' />
                  </Link>  
               </div>
            </div>
         </section>
      );
   }
   
export default Footer;