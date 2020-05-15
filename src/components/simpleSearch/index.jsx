import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchLink from '../searchLink';
import Styles from  './styles.scss';


const SimpleSearch = () => {

   return (
      <section className={`row ${Styles.simpleSearch}`}>
         <div className={`col-md-10 ${Styles.items}`}>
            <div className={`row ${Styles.title}`} >
               <h1 className='col-lg-12 col-md-12'>شغل رویایی خودت رو پیدا کن</h1>
            </div>
            <div className={ `row ${Styles.searchFild}`}>
               <div className='col-lg-2  col-md-3 right-link' >
                  <SearchLink Type='location'>
                     مشاغل روی نقشه
                  </SearchLink>
               </div>
               <div className='col-lg-8 col-md-6 '>
                  <div className={`${Styles.simple}`}>
                     <input type='text' placeholder='عنوان شغلی ، کلمات کلیدی یا نام شرکت' />
                     <button className={`${Styles.submitSearch}`}>بگرد</button>
                  </div>
               </div>
               <div className='col-lg-2 col-md-3 left-link'>
                  <SearchLink Type='searchFilter' >
                     جستجوی پیشرفته
                  </SearchLink>
               </div>
            </div>
            <div className={`row ${Styles.tally}`}>
               <div className='col-lg-3 col-md-3 border-left'>
                  <p>۲۴۳۴</p>
                  <span>عنوان شغلی</span>
               </div>
               <div className='col-lg-3 col-md-3 border-left'>
                  <p>۸۹۴</p>
                  <span> کارفرمای ثبت شده</span>
               </div>
               <div className='col-lg-3 col-md-3 border-left'>
                  <p>۸۴۳۹</p>
                  <span>کارجوی ثبت شده </span>
               </div>
               <div className='col-lg-3 col-md-3'>
                  <p>۴۲۳</p>
                  <span>استخدام موفق </span>
               </div>
            </div>
         </div>
         <div className={`row ${Styles.employer}`}>
            <div className='col-lg-12 col-md-12'>
               <Link to='/'>کارفرما هستم</Link>
            </div>
         </div>

      </section>

   );
}

export default SimpleSearch;