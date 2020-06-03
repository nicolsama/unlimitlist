import { connect } from 'react-redux';
import SplashForm from './splash_form'
import { signup, clearErrors} from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return ({
        formType: 'Splash',
        errors: state.errors
    })
};

const mdp = (dispatch) => ({
    processForm: (user) => (dispatch(signup(user))), 
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SplashForm);