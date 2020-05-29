import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import SearchLink from '../searchLink';

import Styles from './styles.scss';

const ComplexSearch = () => {

   const [val, setVal] = useState({ min: 4500000, max: 6500000 })

   return (
      <section className={`col-12`}>
         <div className={`row ${Styles.complexComponent}`}>
            <div className={`col-md-10 ${Styles.items}`}>
               <div className={`row ${Styles.title}`} >
                  <h1 className={'col-lg-12 col-md-12'}>
                     {locales('titles.advancedSearch')}
                  </h1>
               </div>
               <div className={`row searchFild`}>
                  <div className={`col-lg-2  col-md-3 right-link`} >
                     <SearchLink Type='location' >
                        {locales('titles.jobsOnMap')}
                     </SearchLink>
                  </div>
                  <div className='col-lg-8 col-md-6'>
                     <div className={`row ${Styles.complex}`}>
                        <div className='col-12'>
                           <div className='row'>
                              <input type='text' placeholder={locales('titles.jobTitleOrNameOfCompany')} />
                           </div>
                           <div className='row'>
                              <p className='col-2'>
                                 {locales('titles.typeOfEmployment')}
                              </p>
                              <div className=" col-2 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck1" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck1">
                                    {locales('titles.fullTime')}
                                 </label>
                              </div>
                              <div className=" col-2 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck2" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck2">
                                    {locales('titles.partTime')}
                                 </label>
                              </div>
                              <div className=" col-2 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck3" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck3">
                                    {locales('titles.teleworking')}
                                 </label>
                              </div>
                              <div className=" col-2 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck4" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck4">
                                    {locales('titles.training')}
                                 </label>
                              </div>
                              <div className=" col-2 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck5" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck5">
                                    {locales('titles.project')}
                                 </label>
                              </div>
                           </div>
                           <div className={`row ${Styles.advantage}`}>
                              <p className='col-2'>
                                 {locales('titles.project')}
                              </p>
                              <div className=" col-3 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck6" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck6">
                                    {locales('titles.insurance')}
                                 </label>
                              </div>
                              <div className=" col-3 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck7" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck7">
                                    {locales('titles.overTimeWork')}
                                 </label>
                              </div>
                              <div className=" col-3 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck8" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck8">
                                    {locales('titles.vacation')}
                                 </label>
                              </div>
                              <div className='col-2'></div>
                              <div className=" col-3 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck9" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck9">
                                    {locales('titles.travelService')}
                                 </label>
                              </div>
                              <div className=" col-3 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck10" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck10">
                                    {locales('titles.residence')}
                                 </label>
                              </div>
                              <div className=" col-3 custom-control custom-checkbox">
                                 <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck11" />
                                 <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck11">
                                    {locales('titles.foodService')}
                                 </label>
                              </div>
                           </div>
                           <div className='row mt-5 mb-5'>
                              <div className='col-lg-2  col-md-3 '>
                                 <div className='row'>
                                    <p>
                                       {locales('titles.salary')}
                                    </p>
                                 </div>
                              </div>
                              <div className='col-lg-10 col-md-9 '>
                                 <InputRange
                                    maxValue={10000000}
                                    minValue={2000000}
                                    formatLabel={value => `${value} T`}
                                    value={val}
                                    onChange={value => setVal({ min: value.min, max: value.max })} />
                              </div>
                           </div>
                           <div className='row'>
                              <button className={`${Styles.submitSearch}`}>
                                 {locales('titles.search')}
                              </button>

                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`col-lg-2 col-md-3 left-link`}>
                     <SearchLink Type='search' >
                     {locales('titles.simpleSearch')}
                  </SearchLink>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default ComplexSearch;