import React from 'react'; 

class SplashForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(this.state)
            .then(() => this.props.history.push("/"));
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {

        let errors = (this.props.errors.session.length) ? (
            this.props.errors.session.map(error => <li>{error}</li>))  
            : "" ;

        return (
                <form onSubmit={this.handleSubmit} className="splashForm">
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        placeholder="email">
                    </input>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        placeholder="password">
                    </input>

                    <button
                        type="submit">
                        Sign Up
                    </button>
                    <ul className="errorUl">{errors}</ul>
                </form>

            )
    }

}

export default SplashForm;