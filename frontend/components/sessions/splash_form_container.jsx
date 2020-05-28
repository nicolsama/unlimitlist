import { connect } from 'react-redux';
import React from 'react';
import SplashForm from './splash_form'
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return ({
        formType: 'Splash',
        errors: state.errors
    })
};

const mdp = (dispatch) => ({
    processForm: (user) => (dispatch(signup(user)))
});

export default connect(msp, mdp)(SplashForm);