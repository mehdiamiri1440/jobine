import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/icons/img1.png';
import img2 from '../../../assets/icons/img2.png';
import img3 from '../../../assets/icons/img3.png';
import Styles from './styles.scss';


const BestPost = () => {
   let data = [
      {
         id: 1,
         img: img1,
         text: '۷روش برای ساخت رزومه های حرفه ای و گیرا جهت استخدام'
      },
      {
         id: 2,
         img: img2,
         text: '10 کار که افراد موفق بعد از ساعات کاری  انجام می‌دهند!'
      },
      {
         id: 3,
         img: img3,
         text: '16 دلیل برای اینکه هنوز بی‌کار هستید؟'
      },
      {
         id: 4,
         img: img2,
         text: '10 کار که افراد موفق بعد از ساعات کاری  انجام می‌دهند!'
      },
      {
         id: 5,
         img: img3,
         text: '16 دلیل برای اینکه هنوز بی‌کار هستید؟'
      },
      {
         id: 6,
         img: img1,
         text: '۷روش برای ساخت رزومه های حرفه ای و گیرا جهت استخدام'
      },
   ]
   return (
      <section className={`col-10 ${Styles.bestPostsSection}`}>
         <div className={`row ${Styles.titleDiv}`}>
            <div className={`col-lg-9 col-md-9`}>

               <p className={`${Styles.title}`}>
                  خواندنی های مورد نیاز از وبلاگ
               </p>
               <span>
                  جاب جو
               </span>
            </div>
            <div className={`col-lg-3 col-md-3`}>
               <Link to='/' className={`${Styles.seeAll}`}>
                  مشاهده همه
               </Link>
            </div>
         </div>
         <div className={`row`}>
            {
               data.map((item) =>
                  <Link to='/' key={item.id} className={`col-lg-4 col-md-4 `}>
                     <div className={`row ${Styles.item}`}>
                        <img alt='post-image' src={item.img} width="30%" />
                        <p>
                           {item.text}
                        </p>
                     </div>
                  </Link>
               )
            }
         </div>

      </section>
   );
}


export default BestPost;