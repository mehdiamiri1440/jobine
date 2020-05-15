import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles.scss';
import searchIcon from '../../assets/icons/searchIcon.png';
import locationIcon from '../../assets/icons/locationIconRed.png';



const SearchLink = (props) => {

   const handleStarIcon = () => {
      if (props.Type === 'search'|| props.Type === 'searchFilter' ) {
         return searchIcon;
      } else if (props.Type === 'location') {
         return locationIcon;
      }
   }
   return (
      <Link className={`${Styles.searchLink}`} to={props.Type==='search' ? '/' : props.Type}>
         <img alt='background' src={handleStarIcon()} className='icon' width="17px" />
         {props.children}
      </Link>
   );
}


export default SearchLink;