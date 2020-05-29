import React from 'react';
import Styles from  './styles.scss';

const Description = (props) => {

   return (
      <section className={`col-8 ${Styles.FullDescription}`}>
         <div className={`row ${Styles.title}`}>
            <p>
            {locales('titles.jobDescription')}
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
               {locales('titles.dutiesAndResponsibilities')}
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
               {locales('titles.dutiesAndResponsibilities')}
               </p>
         </div>
         <ul className={`row ${Styles.desc}`}>
            <li>
               {locales('titles.diploma')}
                : {props.data.makinge.diploma}
            </li>
            <li>
               {locales('titles.workExperience')}
                : {props.data.makinge.experience}
            </li>

         </ul>

         <div className={`row ${Styles.title}`}>
            <p>
               
               {locales('titles.dutiesAndResponsibilities')}
               </p>
         </div>
         <ul className={`row ${Styles.desc}`}>

            <li>
            {locales('titles.contactOperator')}
                : {props.data.contact.phone}
            </li>
            <li>
            {locales('titles.address')}
               : {props.data.contact.address}
            </li>
         </ul>
      </section>

   );
}

export default Description;