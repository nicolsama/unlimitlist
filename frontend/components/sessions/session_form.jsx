import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(this.state);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {
        let word = this.props.formType === 'Sign up' ? 'for' : 'to';
        let err = "";
        if (this.props.errors.session.length) {
            err = this.props.errors.session
        }
        return (<div>
            
            <form onSubmit={this.handleSubmit} className='sessionForm'>
                <h3>{this.props.formType} {word} Unlimitlist</h3>

                    <input
                        type='text'
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        placeholder='email'>
                    </input>
                <br />
                    <input
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        placeholder='password'>
                    </input>

                <button 
                    type='submit' 
                    className="sessionButton">
                    {this.props.formType}
                </button>
                <span className="errorSpan">{err}</span>
            </form>
        </div>)
    }
}
export default SessionForm; 