import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Styles from './styles.scss';

const SignUpHeader = _ => {

    return (
        <header className='col-12 my-4 my-md-0'>
            <div className={`${Styles.header} row d-none d-md-block`}>
                <div className={`col-3 col-lg-4 col-md-4  ${Styles.right}`}>
                    <div className='row pointer'>
                        <div className={`col-5 col-lg-4 col-md-5 ${Styles.logo}`}>
                            <p>
                                {locales('titles.jobJoo')}
                            </p>
                        </div>
                        <div className={`col-7 col-lg-8 col-md-7 ${Styles.SearchJob}`}>
                            <Link to='/'>
                                {locales('titles.jobsSearchEngine')}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`col-6 col-lg-5 col-md-7 ${Styles.left}`}>
                    <div className='row'>
                        <div className='col-3 col-lg-3 col-md-3'>
                            <Link className={`${Styles.leftSide} font-weight-bold`} to='/' >{locales('titles.signUp/login')}</Link>
                        </div>
                        <div className='col-5 col-lg-5 pointer col-md-5'>
                            <Link to='/' className='font-weight-bold'>{locales('titles.startUpsTeamCreator')}</Link>
                        </div>
                        <div className='col-4 pointer col-lg-4 col-md-4'>
                            <Link className={`${Styles.rightSide} font-weight-bold`} to='/' >{locales('titles.advancedResumeCreator')}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-none">
                <h5 className={`${Styles["text-primary"]} font-weight-bold text-center`}>
                    جابجو
                </h5>
                <small className={`${Styles["text-primary"]} col-12 d-block text-center`}>
                    موتور جستجوی مشاغل
                </small>
            </div>
        </header>
    );
}

export default withRouter(SignUpHeader);