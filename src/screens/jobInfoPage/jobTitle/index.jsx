import React from 'react';
import Styles from './styles.scss';

import jobTitleBackG from '../../../assets/icons/jobInfoHeader.png'
import starOn from '../../../assets/icons/starIcon.png'
import starOff from '../../../assets/icons/StaroffIcon.png'


const JobHeader = (props) => {

   let handleMarker = (markerState) => {
      if (markerState) {
         return (
            <button className={`row ${Styles.marker}`}>
               <img alt='star' className={`icon`} src={starOn} width="15px" />
               
               {locales('titles.marked')}
            </button>
         )
      } else {
         return (
            <button onClick={handleToggleMarker} className={` ${Styles.noMarke} `} id='marker'>
               
               {locales('titles.mark')}
               <img alt='star' className='icon' src={starOff} width="12px" />
            </button>
         )
      }
   }
   let handleToggleMarker = () => {

   }
   return (
      <section className={`${Styles.jobHeader} col-12`}>
         <div className={`row`}>
            <img alt='jobTitleBackG' className={`${Styles.jobTitleBackG}`} src={jobTitleBackG} width="100%" />
            <div className={`${Styles.mask}`} />
         </div>

         <div className={`row w-90 ${Styles.sub}`}>
            <div className={`col-8 ${Styles.titleJob}`}>
               <div className='row'>
                  <div className='col-3'>
                     <img alt='avatar' className={`${Styles.avatar}`} src={props.data.avatar} width="70%" />
                  </div>
                  <div className='col-8'>
                     <h1 className='row'>{props.data.jobTitle} </h1>
                     <div className='row'>
                        <p>{props.data.company}</p>/
                           <i><small> {props.data.class} </small></i>
                     </div>

                     {handleMarker(props.data.marked)}
                  </div>
               </div>
            </div>
            <div className='col-4 col-lg-3'>
               <button className={`back-red ${Styles.btnCv}`}>
                  <p>
                     
                     {locales('titles.sendresume')}
                     </p>
               </button>
            </div>
         </div>
      </section>
   );
}

export default JobHeader;