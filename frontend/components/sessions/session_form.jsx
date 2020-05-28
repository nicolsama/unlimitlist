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
        this.props.processForm(this.state)
            .then( () => this.props.history.push("/"));
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {
        let words = this.props.formType === 'Sign up' ? 'for' : 'to';
        let errors = (this.props.errors.session.length) ? (
            this.props.errors.session.map(error => <li>{error}</li>))
            : "";


        return (<div>
            
            <form onSubmit={this.handleSubmit} className='sessionForm'>
                <h3>{this.props.formType} {words} Unlimitlist</h3>

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
                <ul className="errorUl">{errors}</ul>
            </form>
        </div>)
    }
}
export default SessionForm; 