import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Spin } from 'antd';
import Timer from '../../../../components/timer';
import { formatter, domManipulator } from '../../../../utils';
import * as authActions from '../../../../redux/auth/actions';
import styles from '../styles.scss';

const EnterVerificationCode = props => {

    const {
        validateVerificationCodeLoading,
        validateVerificationCodeError,
        validateVerificationCodeFailed,
        validateVerificationCodeMessage
    } = props;

    const [verificationCodeInputError, setVerificationCodeInputError] = useState();
    const [verificationCode, setVerificationCode] = useState();

    const onVerificationCodeChanged = event => {
        const { value } = event.target;
        setVerificationCode(value);
        setVerificationCodeInputError(null);
    };


    const validateForm = _ => {
        return new Promise((resolve, reject) => {
            let isVerificationCodeVaild = false;

            const formattedVerificationCode = formatter.toStandard(verificationCode);

            if (!formattedVerificationCode) {
                isVerificationCodeVaild = false;
                setVerificationCodeInputError(locales('messages.fieldValueIsRequired', { fieldName: locales('fields.verificationCode') }));
            } else {
                isVerificationCodeVaild = true;
                setVerificationCodeInputError(null);
            }

            const isFormValid = isVerificationCodeVaild;

            if (!isFormValid) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    };


    const saveForm = async (event) => {
        event.preventDefault();

        const isFormValid = await validateForm();
        if (!isFormValid) {
            return;
        }

        domManipulator.scrollToTop();
        props.validateVerificationCode(props.mobileNumber, verificationCode).then(res => {
            props.changeStep(2);
        })


    };

    return (
        <>
            {/* signup form  */}
            <div className={`${styles['signup-form']} rounded py-4 px-md-4 bg-white`}>
                <Spin spinning={validateVerificationCodeLoading}>
                    <div className='text-center my-3'>{locales('titles.enterVerificationCode')}</div>
                    <Input id='verificationCode' name='verificationCode'
                        value={verificationCode} onChange={onVerificationCodeChanged}
                        className={`invalid-feedback ${!!verificationCodeInputError ? 'is-invalid' : ''} curved-border`} />
                    <div className={`invalid-feedback ${!!verificationCodeInputError ? 'is-invalid-feedback' : ''}`}>
                        {verificationCodeInputError}
                    </div>
                    <div className='my-md-3 mt-3 d-flex justify-content-center align-items-center'>
                        <Timer
                            min={2}
                            sec={0}
                            containerClassName='d-flex justify-content-center align-items-center mt-2 mx-1'
                            substitutionTextClassName='text-dark pointer'
                            timerClassName='text-dark pointer'
                            additionalText={locales('labels.tillReceiveCode')}
                            onSubstitution={() => props.sendVerificationCode(props.mobileNumber, props.password, props.role)}
                            substitutionText={locales('titles.sendCodeAgain')}
                        />
                    </div>
                    <span className='justify-content-center d-none d-md-flex'>{locales('labels.onNumber', { fieldName: props.mobileNumber })}</span>
                    <div className="d-flex justify-content-center">
                        <small className='d-flex justify-content-center d-md-none'>{locales('titles.mobileNumber', { fieldName: props.mobileNumber })}</small>
                        <small>تغییر شماره موبایل</small>
                    </div>

                </Spin>
            </div>

            <div className='justify-content-center mt-4 m-md-0 w-100 w-md-75 d-md-flex'>
                <button onClick={saveForm}
                    className={`${styles['send-code-button']} btn btn-primary font-weight-bold curved-border w-50 d-none d-md-block`}>{locales('titles.approve')}</button>
                <button onClick={saveForm}
                    className={`${styles['send-code-button']} btn btn-primary w-100 d-md-none`}>{locales('titles.login')}</button>
            </div>

            <footer onClick={() => props.changeStep(1)}
                className='text-white btn-link my-5 pointer d-none d-md-block'>{locales('titles.goToPrevStep')}</footer>
            {/* end of signup form */}
        </>
    )
}
const mapStateToProps = (state) => {
    const {
        validateVerificationCodeError,
        validateVerificationCodeLoading,
        validateVerificationCodeFailed,
        validateVerificationCodeMessage
    } = state.authReducer;
    return {
        validateVerificationCodeError,
        validateVerificationCodeLoading,
        validateVerificationCodeFailed,
        validateVerificationCodeMessage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        validateVerificationCode: (mobileNumber, code) => dispatch(authActions.validateVerificationCode(mobileNumber, code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EnterVerificationCode)
