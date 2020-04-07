import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form'
import { login } from '../actions/session_actions';

const msp = (state, ownProps) => {
    debugger;
    return ( {
    formType: 'Log in',
    errors: state.errors
    })
};

const mdp = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
