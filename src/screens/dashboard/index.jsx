import React, { Component } from 'react';
import { Input } from 'antd';
import styles from './styles.scss';
import { validator } from '../../utils';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            fullNameInputError: '',

            email: '',
            emailInputError: ''
        }
    }


    onFullNameChanged = event => {
        this.setState({ fullName: event.target.value })
    };

    onEmailChanged = event => {
        const { value } = event.target;
        if (!value || validator.isEmailAddress(value, { typing: true }))
            this.setState({ email: value })
    };


    render() {

        const {
            fullNameInputError,
            fullName,

            email,
            emailInputError
        } = this.state;

        return (
            <div className={`${styles['bg-color']} p-0 m-0 col-12`}>
                <h3 className={` ${styles['complete-profile-header']} font-weight-bold text-center py-5`}>{locales('titles.completeProfile')}</h3>

                <section className='py-3 w-100 d-flex justify-content-center'>
                    <div className='card w-25'>
                        <div className='card-body'>

                            <div className='required my-3'>{locales('titles.firstNameAndLastName')}</div>
                            <Input id='fullName' name='fullName'
                                value={fullName} onChange={this.onFullNameChanged}
                                className={`invalid-feedback ${!!fullNameInputError ? 'is-invalid' : ''} curved-border`} />
                            <div className={`invalid-feedback ${!!fullNameInputError ? 'is-invalid-feedback' : ''}`}>
                                {fullNameInputError}
                            </div>

                            <div className='required my-3'>{locales('titles.email')}</div>
                            <Input id='email' name='email'
                                value={email} onChange={this.onEmailChanged}
                                className={`invalid-feedback ${!!emailInputError ? 'is-invalid' : ''} curved-border`} />
                            <div className={`invalid-feedback ${!!emailInputError ? 'is-invalid-feedback' : ''}`}>
                                {emailInputError}
                            </div>

                        </div>

                        <div className='d-flex justify-content-center w-100'>
                            <button
                                className={`${styles['send-code-button']} btn btn-success font-weight-bold curved-border  w-50`}>{locales('titles.next')}</button>
                        </div>

                    </div>
                </section>


            </div>
        )
    }
}
