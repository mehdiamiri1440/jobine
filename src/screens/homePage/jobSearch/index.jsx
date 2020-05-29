// handle location search , complex search , simple search
import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBackG from '../../../assets/icons/SearchBackG.png';
import SimpleSearchComponent from '../simpleSearch';
import ComplexSearchComponent from '../complexSearch';
import LocationSearchComponent from '../locationSearch';
import Styles from './styles.scss';

const Search = (props) => {

   const renderSearchComponents = () => {
      if (props.location.pathname === '/') {
         return (
            <SimpleSearchComponent tally={props.tally}  />
         )
      } else if (props.location.pathname === '/searchFilter') {
         return (
            <ComplexSearchComponent />
         )
      } else if (props.location.pathname === '/location') {
         return (
            <LocationSearchComponent />
         )
      }
   }
console.log(props, '[jobsearch]');


   return (
      <section className={`col-12 ${Styles.searchSection}`}>
         <img alt='background' src={SearchBackG} className={`${Styles.img} row`} width="100%" />
         {
            renderSearchComponents()
         }
      </section>
   );
};

export default withRouter(Search);