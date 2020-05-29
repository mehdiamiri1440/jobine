import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles.scss';

import adsAvatar from '../../../assets/icons/Avatar.png'
import starOn from '../../../assets/icons/starIcon.png'
import starOff from '../../../assets/icons/StaroffIcon.png'
import location from '../../../assets/icons/locationIconGrey.png'
import money from '../../../assets/icons/moneyIcon.png'
import view from '../../../assets/icons/viewIcon.png'
import interview from '../../../assets/icons/interviewIcon.png'


const Similarity = (props) => {
   let handleStar = (markerState) => {
      if (markerState) {
         return (
            <button onClick={handleToggleMarker} className={` ${Styles.marked} `} id='marker'>
               نشان شده
               <img alt='star' className='icon' src={starOn} width="10px" />
            </button>
         )
      } else {
         return (
            <button onClick={handleToggleMarker} className={` ${Styles.noMarke} `} id='marker'>
               نشان کردن
               <img alt='star' className='icon' src={starOff} width="10px" />
            </button>
         )
      }
   }
   let handleToggleMarker = () => {
      
   }
   let handleSpecialTag = (specialTag) => {
      if (specialTag) {
         return (
            <div className={`row ${Styles.socialTag}`}>
               <p>
                  آگهی ویژه
            </p>
            </div>
         )
      }
   }
   let handleUrgentTag = (urgentTag) => {
      if (urgentTag) {
         return (
            <div className={`row ${Styles.urgent}`}>
               <p>
                  استخدام فوری
            </p>
            </div>
         )
      }
   }


   return (
      <section className={`col-10 ${Styles.Similarity}`}>
         <div className={`row ${Styles.titleDiv}`}>
            <div className='col-lg-9 col-md-9'>
               <p className={`${Styles.title}`}>
                  
                  {locales('titles.similarityJobs')}
            </p>
            </div>
            <div className='col-lg-3 col-md-3'>
               <Link to='/' className={`${Styles.seeAll}`}>
               {locales('titles.seeAll')}
            </Link>
            </div>
         </div>
         <div className={`row ${Styles.items}`}>
            {props.similarityJobs.map((item, index) =>
               <div className={`col-6 mb-3`} key={index}>
                  <div className={`row ${Styles.itemAds}`}>
                     <div className='col-2'>
                        <div className='row'>
                           <img className={`${Styles.avatar}`} alt='avatar' width="70%"
                              src={item.avatar} />
                           {handleStar(props.similarityJobs[index].marked)}
                        </div>
                     </div>
                     <div className='col-10'>
                        <div className='row'>
                           <span className='col-10' >
                              {item.title}
                           </span>
                           <div className='col-2 '>
                              {handleSpecialTag(item.special)}
                              {handleUrgentTag(item.urgent)}
                           </div>
                        </div>
                        <div className={`row ${Styles.decsP}`}>
                           <p className={`col-12 ${Styles.firstP} `} >
                              {item.name}
                           </p>
                        </div>

                        <div className={`row ${Styles.decsP}`}>
                           <p className='col-5'>
                              {item.city}
                              <img className='icon' src={location} alt='icon' />
                           </p>
                           <p className='col-7'>
                           {locales('titles.from')}
                                 {" " + item.wage.min + " "}
                                 {locales('titles.to')}
                                 {" " + item.wage.max + " "}
                              <img className='icon' src={money} alt='icon' />

                           </p>
                        </div>
                        <div className={`row ${Styles.decsP}`}>
                           <p className='col-5'>
                              {item.interview + " "}
                                 {locales('titles.interview')}
                                 <img className='icon' src={interview} alt='icon' />

                           </p>
                           <p className='col-7'>
                              {item.view + " "}
                              {locales('titles.people')}
                                 <img className='icon' src={view} alt='icon' />

                           </p>
                        </div>

                     </div>
                  </div>
               </div>
            )}

         </div>


      </section>
   );
}


export default Similarity;