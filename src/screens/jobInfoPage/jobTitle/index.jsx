import React from 'react';
import Styles from './styles.scss';

import jobTitleBackG from '../../../assets/icons/jobInfoHeader.png'
import jobAvatar from '../../../assets/icons/avatar.png'
import starOn from '../../../assets/icons/starIcon.png'
import starOff from '../../../assets/icons/StaroffIcon.png'


const JobHeader = (props) => {
   let data = {
      title: 'استخدام طراح رابط کاربری',
      name: 'علی بابا',
      class: 'فناوری اطلاعات ',
      marked: false,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkNJNKx1SFWqT146hNch69uCGHebEdX8QhBGfmpg5hQfnq_a8E&usqp=CAU'
   }

   let handleMarker = (markerState) => {
      if (markerState) {
         return (
            <button className={`row ${Styles.marker}`}>
               <img alt='star' className={`icon`} src={starOn} width="15px" />
               نشان شده
            </button>
         )
      } else {
         return (
            <button onClick={handleToggleMarker} className={` ${Styles.noMarke} `} id='marker'>
               نشان کردن
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
                     <img alt='avatar' className={`${Styles.avatar}`} src={data.avatar} width="70%" />
                  </div>
                  <div className='col-8'>
                     <h1 className='row'>{data.title} </h1>
                     <div className='row'>
                        <p>{data.name}</p>/
                           <i><small> {data.class} </small></i>
                     </div>

                     {handleMarker(data.marked)}
                  </div>
               </div>
            </div>
            <div className='col-4 col-lg-3'>
               <button className={`back-red ${Styles.btnCv}`}>
                  <p>
                     ورود و ارسال رزومه
                     </p>
               </button>
            </div>
         </div>
      </section>
   );
}

export default JobHeader;