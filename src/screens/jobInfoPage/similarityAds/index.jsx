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
   const data = [
      {
         title: '    استخدام UI Designer(گرافیست وب)',
         name: 'علی بابا',
         city: 'تهران (ونک)',
         wage: {
            min: '۲.۴۰۰.۰۰۰',
            max: '۵.۰۰۰.۰۰۰'
         },
         interview: 5,
         view: 67,
         marked: true,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3cW7pqe3CGv-dsl13yWLlIo1Zewqyl47NgWz-htIKmubf6ASJ&usqp=CAU',
         special: false,
         urgent: false
      },
      {
         title: '    استخدام UI Designer(گرافیست وب)',
         name: 'علی بابا',
         city: 'تهران (ونک)',
         wage: {
            min: '۲.۴۰۰.۰۰۰',
            max: '۵.۰۰۰.۰۰۰'
         },
         interview: 52,
         view: 197,
         marked: true,
         avatar: 'data:image/jpeg;base64,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',
         special: true,
         urgent: true
      },
      {
         title: '    استخدام UI Designer(گرافیست وب)',
         name: 'علی بابا',
         city: 'تهران (ونک)',
         wage: {
            min: '۲.۴۰۰.۰۰۰',
            max: '۵.۰۰۰.۰۰۰'
         },
         interview: 52,
         view: 197,
         marked: false,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdloqhP41QiTacYZUTI2xcG-bWsPK4C5HC2TAbGDRPtQJNjxil&usqp=CAU',
         special: false,
         urgent: true
      },
      {
         title: '    استخدام UI Designer(گرافیست وب)',
         name: 'علی بابا',
         city: 'تهران (ونک)',
         wage: {
            min: '۲.۴۰۰.۰۰۰',
            max: '۵.۰۰۰.۰۰۰'
         },
         interview: 52,
         view: 197,
         marked: true,
         avatar: 'https://www.nba.com/kings/sites/kings/files/kings-logo_0.png?w=180&h=105',
         special: false,
         urgent: false
      },
      {
         title: '    استخدام UI Designer(گرافیست وب)',
         name: 'علی بابا',
         city: 'تهران (ونک)',
         wage: {
            min: '۲.۴۰۰.۰۰۰',
            max: '۵.۰۰۰.۰۰۰'
         },
         interview: 52,
         view: 197,
         marked: false,
         avatar: 'https://seeklogo.com/images/V/volkswagen-logo-472C4D64A1-seeklogo.com.jpg',
         special: false,
         urgent: false
      },
      {
         title: '    استخدام UI Designer(گرافیست وب)',
         name: 'علی بابا',
         city: 'تهران (ونک)',
         wage: {
            min: '۲.۴۰۰.۰۰۰',
            max: '۵.۰۰۰.۰۰۰'
         },
         interview: 52,
         view: 197,
         marked: true,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkNJNKx1SFWqT146hNch69uCGHebEdX8QhBGfmpg5hQfnq_a8E&usqp=CAU',
         special: true,
         urgent: false
      },
   ]
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
                  موقعیت های شغلی مشابه
            </p>
            </div>
            <div className='col-lg-3 col-md-3'>
               <Link to='/' className={`${Styles.seeAll}`}>
                  مشاهده همه
            </Link>
            </div>
         </div>
         <div className={`row ${Styles.items}`}>
            {data.map((item, index) =>
               <div className={`col-6 mb-3`} key={index}>
                  <div className={`row ${Styles.itemAds}`}>
                     <div className='col-2'>
                        <div className='row'>
                           <img className={`${Styles.avatar}`} alt='avatar' width="70%"
                              src={item.avatar} />
                           {handleStar(data[index].marked)}
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
                           <p className='col-7'>از
                                 {" " + item.wage.min + " "}

                                 تا
                                 {" " + item.wage.max + " "}
                              <img className='icon' src={money} alt='icon' />

                           </p>
                        </div>
                        <div className={`row ${Styles.decsP}`}>
                           <p className='col-5'>
                              {item.interview + " "}
                                 مصاحبه
                                 <img className='icon' src={interview} alt='icon' />

                           </p>
                           <p className='col-7'>
                              {item.view + " "}
                                 نفر
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