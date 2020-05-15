import React, { Component } from 'react';
import JobSearch from '../../components/jobSearch';
import DownloadApp from '../../components/downloadApp';
import BestPost from '../../components/bestBlogPosts';
class HomePage extends Component {
   
   render() {
      return (
         <div>
            <JobSearch />
            <DownloadApp/>
            <BestPost/>
         </div>
      );
   }
}

export default HomePage;