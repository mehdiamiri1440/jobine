import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles.scss';


const TagAds = (props) => {
   return (

      <section className={`col-4 ${Styles.tagsDescription} border-right`}>
         <div className='row w-95 mb-4 mr-1'>
            <p className={`${Styles.tag}`}>
               {locales('titles.wage')+ '  '}
                   :
                   {"  " +locales('titles.from')}
               {"  " + props.data.wage.min + '  '}

               {locales('titles.to')}
               {"  " + props.data.wage.max + '  '}
            </p>
         </div>
         <div className='row w-95 mb-4 mr-1 '>
            <p>
               {locales('titles.typeOfCooperation')}
                  : </p>
            {props.data.kind.map((item, index) =>
               <Link key={index} to='/' className={`${Styles.tag}`}>
                  {item}
               </Link>
            )}

         </div>
         <div className='row w-95 mb-4 mr-1'>
            <p>
               {locales('titles.requiredSkills')}
               :</p>
            {props.data.skills.map((item, index) =>
               <Link key={index} to='/' className={`${Styles.tag}`}>
                  {item}
               </Link>
            )}
         </div>
         <div className='row w-95 mb-4 mr-1'>
            <p>
               {locales('titles.gender')}
               :
               {props.data.gender}
            </p>
         </div>
         <div className='row w-95 mb-4 mr-1'>
            <p>

               {locales('titles.city')}
               : </p>
            {props.data.city.map((item, index) =>
               <Link key={index} to='/' className={`${Styles.tag}`}>
                  {item}
               </Link>
            )}

         </div>
         <div className='row w-95 mb-4 mr-1'>
            <p>
            {locales('titles.category')}
                :
               </p>
            <Link to='/' className={`${Styles.tag}`}>
               {props.data.category}
            </Link>
         </div>
      </section>
   );
}
export default TagAds;