import React from 'react';
import {UserConsumer} from "../../context/context";



class Login extends React.Component {//_______sets state
    state = {
        user: {
            name: "",
            email: "",
            phone: "",
            userRole: "customer",
            isAuth: false
        }
    };

    handleInput = (e) => {
        const target = e.target;
        const value = target.value
        const name = target.name
        this.setState(
            {[name]: value,});
    };

    handleSubmit = (e) => {
        this.setAuth(e) //--------------fix double event
        this.props.updateUser(this.state)
        e.preventDefault();
    };

    setAuth = (e) => {////// make check
        this.setState({isAuth: true})
    }


    render() {
        return (
            <form>
                <p>
                    <input
                        type='text'
                        placeholder="name"
                        value={this.state.name}
                        name='name'
                        onChange={this.handleInput}
                    /></p>
                <p>
                    <button onClick={
                        this.handleSubmit
                    }>Login
                    </button>
                </p>
            </form>

        );
    };
};

const LoginToContext = (props) => { //make props for context
    return (
        <UserConsumer>
            {user => (
                <Login {...props}
                       isAuth={user.isAuth}
                       updateUser={user.updateUser}
                />
            )}
        </UserConsumer>
    );
};

export default LoginToContext;


