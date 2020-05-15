import React, { Component } from 'react';
import JobTitle from '../../components/jobTitle';
import JobDescription from '../../components/jobDescription';
import JobTag from '../../components/jobTags';
import SimilarityJob from '../../components/similarityAds';
import { connect } from 'react-redux'

class JobInfoPage extends Component {


   render() {
      console.log(this.props,'[jobInfo]');

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