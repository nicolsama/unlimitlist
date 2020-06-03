import { connect } from 'react-redux';
import SessionForm from './session_form'
import { signup, clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return ({
    formType: 'Sign up',
    errors: state.errors
    })
};

const mdp = (dispatch) => ({
    processForm: (user) => (dispatch(signup(user))), 
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);