import React, { useState } from 'react';
import InputRange from 'react-input-range';
import SearchLink from '../searchLink';

import Styles from './styles.scss';

const ComplexSearch = () => {

   const [val, setVal] = useState({ min: 3, max: 5 })

   return (
      <section className={`row ${Styles.complexComponent}`}>
         <div className={`col-md-10 ${Styles.items}`}>
            <div className={`row ${Styles.title}`} >
               <h1 className={'col-lg-12 col-md-12'}>جستجوی حرفه ای مشاغل</h1>
            </div>
            <div className={`row searchFild`}>
               <div className={`col-lg-2  col-md-3 right-link`} >
                  <SearchLink Type='location' >
                     مشاغل روی نقشه
                  </SearchLink>
               </div>
               <div className='col-lg-8 col-md-6'>
                  <div className={`row ${Styles.complex}`}>
                     <div className='col-12'>
                        <div className='row'>
                           <input type='text' placeholder='عنوان شغلی ، کلمات کلیدی یا نام شرکت' />
                        </div>
                        <div className='row'>
                           <p className='col-2'>:نوع استخدام</p>
                           <div className=" col-2 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck1" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck1">تمام وقت</label>
                           </div>
                           <div className=" col-2 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck2" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck2"> پاره وقت</label>
                           </div>
                           <div className=" col-2 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck3" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck3">  دورکاری </label>
                           </div>
                           <div className=" col-2 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck4" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck4"> کار آموزی</label>
                           </div>
                           <div className=" col-2 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck5" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck5"> پروژه ای</label>
                           </div>
                        </div>
                        <div className={`row ${Styles.advantage}`}>
                           <p className='col-2'>:مزایای شغلی </p>
                           <div className=" col-3 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck6" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck6"> بیمه تامین اجتماعی</label>
                           </div>
                           <div className=" col-3 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck7" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck7"> اضافه کاری</label>
                           </div>
                           <div className=" col-3 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck8" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck8">  مرخصی متعارف </label>
                           </div>
                           <div className='col-2'></div>
                           <div className=" col-3 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck9" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck9"> سرویس رفت و آمد</label>
                           </div>
                           <div className=" col-3 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck10" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck10">  محل اسکان</label>
                           </div>
                           <div className=" col-3 custom-control custom-checkbox">
                              <input type="checkbox" className={`custom-control-input ${Styles.filterCheckBox}`} id="customCheck11" />
                              <label className={`custom-control-label ${Styles.filterLabel}`} htmlFor="customCheck11"> سرویس تغذیه </label>
                           </div>
                        </div>
                        <div className='row mt-5 mb-5'>

                           <p className='col-4'>: حقوق مورد نظر </p>
                           <div className='col-7'>

                              <InputRange
                                 draggableTrack
                                 maxValue={10}
                                 minValue={1}
                                 value={val}
                                 htmlFormatLabel={value => `${value} Rials`}
                                 onChange={(value) => setVal({ min: value.min, max: value.max })} />

                           </div>
                        </div>
                        <div className='row'>
                           <button className={`${Styles.submitSearch}`}>بگرد</button>

                        </div>
                     </div>
                  </div>
               </div>
               <div className={`col-lg-2 col-md-3 left-link`}>
                  <SearchLink Type='search' >
                     جستجوی ساده
                  </SearchLink>
               </div>
            </div>
         </div>
      </section>
   );
}
export default ComplexSearch;