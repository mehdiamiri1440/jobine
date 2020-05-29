import React, { Component } from 'react';
import JobSearch from './jobSearch';
import DownloadApp from './downloadApp';
import BestPost from './bestBlogPosts';
import { connect } from 'react-redux';



class HomePage extends Component {

   render() {
      return (
         <div>
            <JobSearch {...this.props} />
            <DownloadApp {...this.props} />
            <BestPost {...this.props} />
         </div>
      );
   }
}


const mapStateToProps = (state) => ({
   tally: state.homePageReducer.tally,
})

export default connect(mapStateToProps)(HomePage);