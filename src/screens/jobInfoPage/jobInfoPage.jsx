import React, { Component } from 'react';
import JobTitle from './jobTitle';
import JobDescription from './jobDescription';
import JobTag from './jobTags';
import SimilarityJob from './similarityAds';
import { connect } from 'react-redux'

class JobInfoPage extends Component {


   render() {
      console.log(this.props, '[jobInfo]');

      return (
         <div className='col-12'>
            <div className='row'>
               <JobTitle {...this.props} />
            </div>
            <div className='row w-90 m-auto'>
               <JobDescription {...this.props} />
               <JobTag {...this.props} />
            </div>
            <div className='row'>
               <SimilarityJob />
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   data: state.jobInfoPageReducer.job
})

export default connect(mapStateToProps)(JobInfoPage);