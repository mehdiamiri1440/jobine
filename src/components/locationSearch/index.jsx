import React, { useState } from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import Modal from 'react-awesome-modal';
import SearchLink from '../searchLink';
import Styles from './styles.scss';

const LocationSearch = () => {
   const [visible, setVisible] = useState(false)

   const token = 'e123b6acba0a3d49b34c3f4e73e95b2e88875c7f';

   return (
            <section className={`col-12 ${Styles.locationComponent}`}>
               
               <div className={`row ${Styles.LocationSearch}`}>
                  <Modal visible={visible} width='90%' height='90%'
                     effect="fadeInUp" onClickAway={() => setVisible(true)}>
                     <button className={`${Styles.closeModal}`} onClick={() => setVisible(false)}> X </button>
                     <CedarMaps
                        containerStyle={{
                           position: 'relative',
                           width: '1700px',
                           height: '800px',
                           margin: '0 auto',
                           padding: 0,
                           overflow: 'hidden',
                           left: '0px',
                           top: '-200px'
                        }}
                        token={token}
                        center={[51.34379364705882, 35.74109568627451]}
                     >
                     </CedarMaps>
                  </Modal>
               </div>
               <div className={`col-md-10 ${Styles.items}`}>
                  <div className={`row ${Styles.title}`} >
                     <h1 className='col-lg-12 col-md-12'>مشاهده زنده مشاغل روی نقشه
                  </h1>
                  </div>
                  <div className={`row ${Styles.searchFild}`}>
                     <div className='col-lg-2  col-md-3 right-link'>
                        <SearchLink Type='search' >
                           جستجوی ساده
                  </SearchLink>
                     </div>
                     <div className='col-lg-8 col-md-6 '>
                        <div className={`row ${Styles.mapParent}`}>
                           <CedarMaps
                              containerStyle={{
                                 height: '100%',
                                 width: '100%',
                                 margin: 0,
                                 padding: 0
                              }}
                              token={token}
                              center={[51.34379364705882, 35.74109568627451]}
                           >
                           </CedarMaps>
                        </div>
                        <div className={`row ${Styles.fullscreen}`}>
                           <button className={`${Styles.fullscreenBtn}`} onClick={() => setVisible(true)} >نمایش تمام صفحه</button>

                        </div>
                     </div>
                     <div className='col-lg-2 col-md-3 left-link'>
                        <SearchLink Type='searchFilter'>
                           جستجوی پیشرفته
                  </SearchLink>
                     </div>
                  </div>
               </div>
            </section>
   );
}

export default LocationSearch;