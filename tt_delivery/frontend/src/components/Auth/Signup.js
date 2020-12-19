import React, {setState, props} from 'react';
import {UserConsumer} from "../../context/context";


class SignUp extends React.Component {//_______sets state
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                email: "",
                phone: "",
                userRole: 'customer',
            }
    }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(e) {
        const target = e.target;
        const value = target.value
        const name = target.name
        this.setState(
            {[name]: value,});
    };

    handleSubmit = (e) => {
        this.props.updateUser(this.state)
        e.preventDefault();
    };

    setAuth = () => {////// make check
        this.setState({isAuth: true})
    }

    handleSelect = (e) => {
        this.setState(
            {userRole: e.target.value, isAuth: true});
    };
    ;


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <input
                        type='text'
                        placeholder="name"
                        value={this.state.name}
                        name='name'
                        onChange={this.handleInput}
                    /></p>
                <div className="control">
                    <input

                        type="text"///change types_________
                        placeholder="email"
                        value={this.state.email}
                        name='email'
                        onChange={this.handleInput}
                    /></div>
                <p>
                    <input
                        type='text'
                        placeholder="phone"
                        value={this.state.phone}
                        name='phone'
                        onChange={this.handleInput}
                    /></p>
                <p>

                    <select
                        value={this.state.userRole}
                        onChange={this.handleSelect}>
                        <option value='none'>Select option</option>
                        <option value='customer'>Customer</option>
                        <option value='courier'>Courier</option>
                    </select></p>

                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form>
        );
    }
    ;
};


const
    SignUpToContext = (props) => { //connect
        return (
            <UserConsumer>
                {user => (
                    <SignUp {...props}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                            userRole={user.userRole}
                            updateUser={user.updateUser}
                    />
                )}
            </UserConsumer>
        );
    };

export default SignUpToContext;


