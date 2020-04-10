import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return ({
    formType: 'Sign up',
    errors: state.errors
    })
};

const mdp = (dispatch) => ({
    processForm: (user) => (dispatch(signup(user)))
});

export default connect(msp, mdp)(SessionForm);