import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Radio } from 'antd';
import { formatter, domManipulator, validator } from '../../../../utils';
import styles from '../styles.scss';
import ENUMS from '../../../../enums';

const MobileNumberAndRole = props => {
    let [isEmployer, setIsEmployer] = useState(false);
    let [role, setRole] = useState();
    const [mobileNumberInputError, setMobileNumberInputError] = useState();
    const [passwordInputError, setPasswordInputError] = useState();
    const [roleInputError, setRoleInputError] = useState();
    let [mobileNumber, setMobileNumber] = useState('');
    let [password, setPassword] = useState('');

    const onRadioChanged = event => {
        const { value } = event.target;
        setRole(value);
        setRoleInputError(null);
    };

    const onMobileNumberChanged = event => {
        const { value } = event.target;
        if (validator.isMobileNumber(value, { typing: true }) && value.length <= validator.MAX_MOBILE_NUMBER_LENGTH) {
            setMobileNumber(value);
            setMobileNumberInputError(null);
        }
    };

    const onPasswordChanged = event => {
        const { value } = event.target;
        setPassword(value);
        setPasswordInputError(null);
    };


    const validateForm = _ => {
        return new Promise((resolve, reject) => {
            let isMobileNumberValid = false;
            let isPasswordValid = false;
            let isRoleValid = false;

            const formattedMobileNumber = formatter.toStandard(mobileNumber);
            const formattedPassword = formatter.toStandard(password);
            const formattedRole = formatter.toStandard(role);

            if (!formattedMobileNumber || !validator.isMobileNumber(formattedMobileNumber)) {
                isMobileNumberValid = false;
                setMobileNumberInputError(locales('messages.fieldValueIsRequired', { fieldName: locales('fields.mobileNumber') }));
            } else {
                isMobileNumberValid = true;
                setMobileNumberInputError(null);
            }

            if (!formattedRole) {
                isRoleValid = false;
                setRoleInputError(locales('messages.fieldValueIsRequired', { fieldName: locales('fields.role') }));
            } else {
                isRoleValid = true;
                setRoleInputError(null);
            }

            if (!formattedPassword || formattedPassword.length < validator.DEFAULT_MIN_VALUE) {
                isPasswordValid = false;
                setPasswordInputError(locales('messages.fieldValueIsRequired', { fieldName: locales('titles.password') }));
            } else {
                isPasswordValid = true;
                setPasswordInputError(null);
            }

            const isFormValid = isMobileNumberValid && isRoleValid && isPasswordValid;

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
        props.sendVerificationCode(mobileNumber, password, role);

    };

    return (
        <>
            {/* signup form  */}
            <div className={`${styles['signup-form']} rounded py-4 px-md-4 bg-white`}>
                <div className='text-center my-3 d-none d-md-block'>{locales('titles.validMobileNumber')}</div>
                <div className='text-center my-2 font-weight-bold d-md-none'>{locales('titles.mobileNumber')}</div>
                <Input id='mobileNumber' name='mobileNumber'
                    value={mobileNumber} onChange={onMobileNumberChanged}
                    className={`invalid-feedback ${!!mobileNumberInputError ? 'is-invalid' : ''} curved-border`} />
                <div className={`invalid-feedback ${!!mobileNumberInputError ? 'is-invalid-feedback' : ''}`}>
                    {mobileNumberInputError}
                </div>
                <div className='text-center my-2 my-md-3'>{locales('titles.password')}</div>
                <Input.Password id='password' name='password'
                    value={password} onChange={onPasswordChanged}
                    className={`invalid-feedback ${!!passwordInputError ? 'is-invalid' : ''} curved-border`} />
                <div className={`invalid-feedback ${!!passwordInputError ? 'is-invalid-feedback' : ''}`}>
                    {passwordInputError}
                </div>
                <Radio.Group
                    id='role' name='role' onChange={onRadioChanged} className='d-flex justify-content-center mt-4 w-100'
                    value={role}>
                    <Radio
                        onChange={() => setIsEmployer(false)}
                        value={ENUMS.ROLES.values.WORKER}>{locales('titles.iAmJobSeeker')}</Radio>
                    {!isEmployer ?
                        <Radio onChange={event => setIsEmployer(event.target.checked)} value={isEmployer}>{locales('titles.iAmEmployer')}</Radio>
                        :
                        <>
                            <span className='px-1 px-sm-2'>{locales('titles.employer')}</span>
                            (
                            <Radio className='radio-color mx-1 mx-sm-2 d-flex align-items-center justify-content-center' value={ENUMS.ROLES.values.REAL_EMPLOYEE}>{locales('titles.real')}</Radio>
                            <Radio className='radio-color ml-1 d-flex align-items-center justify-content-center' value={ENUMS.ROLES.values.LEAGAL_EMPLOYEE}>{locales('titles.legal')}</Radio>
                            )
                        </>
                    }
                </Radio.Group>
                <div className={`invalid-feedback ${!!roleInputError ? 'is-invalid-feedback' : ''}`}>
                    {roleInputError}
                </div>
                <div className="text-center d-md-none my-4">{locales('titles.activisonCodeWillBeSent')}</div>
            </div>

            <div className='d-flex justify-content-center w-100 w-md-75 m-auto'>
                <button onClick={saveForm} className={`${styles['send-code-button']} btn btn-primary font-weight-bold curved-border w-50 d-none d-md-block`}>{locales('titles.sendConfirmationCode')}</button>
                <button onClick={saveForm} className={`${styles['send-code-button']} btn btn-primary w-100 d-md-none`}>{locales('titles.sendConfirmationCode')}</button>
            </div>

            <Link to='/login' className="d-none d-md-block">
                <footer className='text-white btn-link my-5 pointer text-center'>{locales('titles.goToLogin')}</footer>
            </Link>
            {/* end of signup form */}
        </>
    )
}
export default MobileNumberAndRole;
