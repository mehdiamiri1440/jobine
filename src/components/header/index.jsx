import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Styles from './styles.scss';

const Header = (props) => {

      return (
         <header className='col-12'>
         <div className={`${Styles.header} row`}>
            <div className={`col-3 col-lg-3 col-md-4  ${Styles.right}`}>
               <div className='row'>
                  <div className={`col-5 col-lg-4 col-md-5 ${Styles.logo}`}>
                     <p>
                        جابجو
                     </p>
                     </div>
                  <div className={`col-7 col-lg-8 col-md-7 ${Styles.SearchJob}`}>
                     <Link to='/'>
                     موتور جستجوی مشاغل 
                     </Link>
                  </div>
               </div>
            </div>   
            <div className={`col-6 col-lg-5 col-md-7 ${Styles.left}`}>
               <div className='row'>
                  <div className='col-3 col-lg-3 col-md-3'>
                     <Link className={`${Styles.leftSide}`} to='/' >رزومه ساز</Link>
                  </div>
                  <div className='col-5 col-lg-5 col-md-5'>
                     <Link to='/' >تیم سازی استارت آپ ها</Link>
                  </div>
                  <div className='col-4 col-lg-4 col-md-4'>
                     <Link className={`${Styles.rightSide}`} to='/' >ثبت نام / ورود</Link>
                  </div>
               </div>
            </div>
        </div>
         </header>
      );
   }
   
export default withRouter(Header);