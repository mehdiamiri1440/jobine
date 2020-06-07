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
            emailInputError: '',
            step: 0
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

    nextStep = () => {
        let { step } = this.state;
        step++
        if(step < 2)
        this.setState({step})
    }
    goBack = () => {
        let { step } = this.state;
        step--
        if(step >= 0)
        this.setState({step})
    }
    uploadImage = (event) => {
        console.log(event)
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =  (e) => {
            document.getElementById(styles['image_container']).innerHTML = null;
            document.getElementById(styles['image_container']).style.backgroundImage = `url('${reader.result}')`
        };
    }
    render() {

        const {
            fullNameInputError,
            fullName,
            email,
            emailInputError,
            step
        } = this.state;

        let element = null,
        title = null;
        
        switch (step){
            case 0:
                title = locales('titles.completeProfile');
                element = <div className='card-body'>
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
                break;
            case 1:
                title = locales('titles.uploadImage');
                element = <div className='card-body'>
                    <div className='my-3 w-100 text-center'>{locales('titles.uploadImageProfileSection')}</div>
                    <div className="d-flex justify-content-center">
                        <label id={styles['image_container']} htmlFor="profile_image" className="pointer rounded-circle border">
                            <i className="fal fa-plus m-0" />
                        </label>
                        <Input type="file" id='profile_image' name='profile_image' onChange={this.uploadImage} className="d-none" />
                    </div>
                </div>
                break;
            default:
                break;
        }
        
        return (
            <div className={`${styles['bg-color']} p-0 m-0 col-12`}>
                <h3 className={` ${styles['complete-profile-header']} font-weight-bold text-center py-5`}>{title}</h3>

                <section className='py-3 w-100 d-flex justify-content-center'>
                    <div className='card w-25'>
                        {element}
                        <div className='d-flex justify-content-center w-100'>
                            <button
                                className={`${styles['send-code-button']} btn btn-success font-weight-bold curved-border  w-50`} onClick={this.nextStep}>{locales('titles.next')}</button>
                        </div>
                        {this.state.step ? <div className='d-flex justify-content-center w-100 position-absolute pointer' style={{top: "calc(100% + 35px)"}} onClick={this.goBack}>
                           {locales('titles.goBackLevel')}
                        </div>: null}
                    </div>
                </section>


            </div>
        )
    }
}
