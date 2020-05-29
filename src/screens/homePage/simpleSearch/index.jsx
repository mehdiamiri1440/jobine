import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchLink from '../searchLink';
import Styles from './styles.scss';


const SimpleSearch = (props) => {

   return (
      <section className={`row ${Styles.simpleSearch}`}>
         <div className={`col-md-10 ${Styles.items}`}>
            <div className={`row ${Styles.title}`} >
               <h1 className='col-lg-12 col-md-12'>
                  {locales('titles.findYourJob')}
               </h1>
            </div>
            <div className={`row ${Styles.searchFild}`}>
               <div className='col-lg-2  col-md-3 right-link' >
                  <SearchLink Type='location'>
                     {locales('titles.jobsInMap')}
                  </SearchLink>
               </div>
               <div className='col-lg-8 col-md-6 '>
                  <div className={`${Styles.simple}`}>
                     <input type='text' placeholder={locales('titles.jobTitleOrNameOfCompany')} />
                     <button className={`${Styles.submitSearch}`}>
                     {locales('titles.search')} 
                     </button>
                  </div>
               </div>
               <div className='col-lg-2 col-md-3 left-link'>
                  <SearchLink Type='searchFilter' >
                  {locales('titles.goToFilterSearch')}
                  </SearchLink>
               </div>
            </div>
            <div className={`row ${Styles.tally}`}>
               <div className='col-lg-3 col-md-3 border-left'>
                  <p>
                     {props.tally.numberOfJobTitle}
                  </p>
                  <span>
                  {locales('titles.jobTitle')}
                  </span>
               </div>
               <div className='col-lg-3 col-md-3 border-left'>
                  <p>
                     {props.tally.numberOfRegisteredEmployer}
                  </p>
                  <span> 
                  {locales('titles.registeredEmployer')}
                     </span>
               </div>
               <div className='col-lg-3 col-md-3 border-left'>
                  <p>
                     {props.tally.numberOfRegisteredApplicant}
                  </p>
                  <span>
                  {locales('titles.registeredApplicant')}
                     </span>
               </div>
               <div className='col-lg-3 col-md-3'>
                  <p>
                     {props.tally.numberOfSuccessfulEmployment}
                  </p>
                  <span>
                  {locales('titles.successfulEmployment')}
                      </span>
               </div>
            </div>
         </div>
         <div className={`row ${Styles.employer}`}>
            <div className='col-lg-12 col-md-12'>
               <Link to='/'>
               {locales('titles.iAmEmployer')}
               </Link>
            </div>
         </div>

      </section>

   );
}

export default SimpleSearch;