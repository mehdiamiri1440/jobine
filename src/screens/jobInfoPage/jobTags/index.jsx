import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles.scss';


const TagAds = (props) => {
      return (

         <section className={`col-4 ${Styles.tagsDescription} border-right`}>
            <div className='row w-95 m-auto'>
               <p className={`${Styles.tag}`}>
                  دستمزد :
                  از
                  {"  " + props.data.wage.min + '  '}
                  تا
                  {"  " + props.data.wage.max + '  '}
               </p>
            </div>
            <div className='row  w-95 m-auto'>
               <p>نوع همکاری : </p>
               { props.data.kind.map((item , index) =>
                  <Link key={index} to='/' className={`${Styles.tag}`}>
                     {item}
                  </Link>
               )}

            </div>
            <div className='row  w-95 m-auto'>
               <p>مهارت های مورد نیاز :</p>
               {props.data.skills.map((item , index) =>
                  <Link key={index} to='/' className={`${Styles.tag}`}>
                     {item}
                  </Link>
               )}
            </div>
            <div className='row  w-95 m-auto'>
               <p>
                  جنسیت : 
                   { props.data.gender}
               </p>
            </div>
            <div className='row  w-95 m-auto'>
               <p>شهر : </p>
               {props.data.city.map((item , index) =>
                  <Link key={index} to='/' className={`${Styles.tag}`}>
                     {item}
                  </Link>
               )}

            </div>
            <div className='row  w-95 m-auto'>
               <p>
                 دسته بندی :  
               </p>
               <Link to='/' className={`${Styles.tag}`}>
                  {props.data.category}
               </Link>
            </div>
         </section>
      );
   }
export default TagAds;