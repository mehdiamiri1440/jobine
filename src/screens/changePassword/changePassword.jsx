import React from 'react'
import { connect } from 'react-redux'

import './changePassword.scss'
class ChangePassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    console.group(this.props, '[[changePage]]');
    
    return (
      <>
        hello all
      </>

    )
  }
}

const mapStateToProps = (state) => ({
  data: state.changePasswordReducer.changePasswordLoading
  
  
})

export default connect(mapStateToProps)(ChangePassword)