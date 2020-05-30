import React, { useState, useEffect } from 'react';
import SignUpHeader from './signUpHeader';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import MobileNumberAndRole from './steps/mobileNumberAndRole';
import EnterVerificationCode from './steps/enterVerificationCode';
import * as authActions from '../../../redux/auth/actions';
import styles from './styles.scss';

const SignUp = props => {

    const {
        sendVerificationCodeError,
        sendVerificationCodeMessage,
        sendVerificationCodeFailed,
        sendVerificationCodeLoading
    } = props;

    let [step, setStep] = useState(1);
    let [hasError, setHasError] = useState(false);
    let [mobileNumber, setMobileNumber] = useState('');
    let [password, setPassword] = useState('');
    let [role, setRole] = useState('');


    const changeStep = step => setStep(step);

    const sendVerificationCode = (mobileNumber, password, role) => {
        setRole(role);
        setMobileNumber(mobileNumber);
        setPassword(password);
        props.sendVerificationCode(mobileNumber, password, role).then(res => {
            if (res && step == 1) {
                setHasError(false);
                changeStep(2);
            }
            else {
                setHasError(true);
            }
        });
    }

    const renderSteps = _ => {
        switch (step) {
            case 1: {
                return <MobileNumberAndRole sendVerificationCode={sendVerificationCode} />
            };
            case 2: {
                return <EnterVerificationCode role={role} password={password} mobileNumber={mobileNumber} changeStep={changeStep} sendVerificationCode={sendVerificationCode} />
            };
            default:
                break;
        }
    }

    return (
        <>
            <SignUpHeader />
            <Spin tip={locales('titles.loading')} size='large' spinning={sendVerificationCodeLoading}>
                <section className={`d-flex justify-content-center align-items-center ${styles['signup-background']}`}>
                    <div className="col-md-auto col-12 py-3">

                        {/* header text */}
                        <h1 className='text-white text-center font-weight-bold d-none d-md-block'>{locales('titles.registerInJobjoo')}</h1>
                        <h6 className={`${styles['signup-header']} text-center d-md-none`}>{locales('titles.signup')}</h6>
                        {hasError && <div className="alert alert-danger">
                            {locales("messages.mobileNumberExist")}
                        </div>}
                        {/* end of header text */}

                        {renderSteps()}
                    </div>
                </section>
                <section className={`${styles['signup-back-button']} bg-white border-top border-bottom my-3 d-md-none`}>
                    <div>
                        بازگشت
                    </div>
                </section>
            </Spin>
        </>
    )
}

const mapStateToProps = (state) => {
    const {
        sendVerificationCodeError,
        sendVerificationCodeFailed,
        sendVerificationCodeLoading,
        sendVerificationCodeMessage
    } = state.authReducer;

    return {
        sendVerificationCodeLoading,
        sendVerificationCodeError,
        sendVerificationCodeFailed,
        sendVerificationCodeMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendVerificationCode: (mobileNumber, password, role) => dispatch(authActions.sendVerificationCode(mobileNumber, password, role))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);