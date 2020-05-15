import React from 'react';
import Styles from  './styles.scss';

const Description = (props) => {

   return (
      <section className={`col-8 ${Styles.FullDescription}`}>
         <div className={`row ${Styles.title}`}>
            <p>
               شرح موقعیت شغلی
               </p>
         </div>
         <ol className={`row ${Styles.desc}`}>
            {
               props.data.infoJob.map((item, index) =>
                  <li key={index}>
                     {item}
                  </li>
               )
            }
         </ol>

         <div className={`row ${Styles.title}`}>
            <p>
               وظایف و مسئولیت ها
               </p>
         </div>
         <ol className={`row ${Styles.desc}`}>
            {
               props.data.chore.map((item, index) =>
                  <li key={index}>
                     {item}
                  </li>
               )
            }
         </ol>

         <div className={`row ${Styles.title}`}>
            <p>
               حداقل ويژگی های مورد نیاز
               </p>
         </div>
         <ul className={`row ${Styles.desc}`}>
            <li>
               حداقل مدرک تحصیلی : {props.data.makinge.diploma}
            </li>
            <li>
               حداقل سابقه کار : {props.data.makinge.experience}
            </li>

         </ul>

         <div className={`row ${Styles.title}`}>
            <p>
               اطلاعات تماس
               </p>
         </div>
         <ul className={`row ${Styles.desc}`}>

            <li>
               شماره تماس واحد منابع انسانی : {props.data.contact.phone}
            </li>
            <li>
               آدرس : {props.data.contact.address}
            </li>
         </ul>
      </section>

   );
}

export default Description;