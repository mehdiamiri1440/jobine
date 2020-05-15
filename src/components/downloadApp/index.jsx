import React from 'react';
import googlePlay from '../../assets/icons/googlePlay.png';
import appStore from '../../assets/icons/appStore.png';
import phone from '../../assets/icons/phone.png';
import { Link } from 'react-router-dom';
import Styles from './styles.scss';


const DownloadApp = () => {

      return (
         <section className={`${Styles.downloadAppSection} col-10`}>
            <div className='row'>
               <div className='col-lg-6 col-md-6'>
                  <div className='row'>
                     <h3>دریافت اپلیکیشن جاب جو</h3>
                     <p>
                        به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه  طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شد.
                  </p>
                  </div>
                  <div className='row'>
                     <div className='col-lg-3 col-md-3' >
                        <Link to='/a'>
                           <img alt='google-play' src={googlePlay} width="100%" />
                        </Link>
                     </div>
                     <div className='col-lg-3 col-md-3'>
                        <Link to='/b'>
                           <img alt='app-store' src={appStore} width="100%" />
                        </Link>
                        </div>
                  </div>
               </div>
               <div className={`col-lg-6 col-md-6 ${Styles.phoneImg}`}>
               <img alt='phone' src={phone} width="510px" height='460px' />
               </div>
            </div>
         </section>
      );
   }

export default DownloadApp;