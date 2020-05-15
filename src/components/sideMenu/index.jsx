import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';


class SideMenu extends PureComponent {


    render() {
        return (
            <div className='bg-danger'>it is side menu</div>
        )
    }
}

export default withRouter(SideMenu);
