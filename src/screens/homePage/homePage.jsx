import React, { Component } from 'react';
import JobSearch from './jobSearch';
import DownloadApp from './downloadApp';
import BestPost from './bestBlogPosts';
class HomePage extends Component {

   render() {
      return (
         <div>
            <JobSearch />
            <DownloadApp />
            <BestPost />
         </div>
      );
   }
}

export default HomePage;