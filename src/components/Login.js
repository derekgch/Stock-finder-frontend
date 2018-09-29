import React, { Component } from 'react';
import { Button, Input, Row  } from 'react-materialize'
import {URL, local_URL} from '../Adapter';


class Login extends Component {
    state={
        password: "",
        username: ""
    }

    handleChange= (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSumbit = (event) => {
        event.preventDefault();
        this.loginSession().then(() => this.setState({password: "", username: ""}))
        .then(() => {this.props.history.push('/')})
        .catch(function(error) {
            alert("Wrong username / Password")
        })
    }
    handleGuestButton = event =>{
        event.preventDefault();
        this.setState({
            password: "guest",
            username: "guest"
        }, ()=> this.handleSumbit(event));
    }

     handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    loginSession(){
        const url = local_URL+ "sessions";
        let config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(this.state)
        }

        return fetch(url, config).then(this.handleErrors).then(data => {
            localStorage.setItem('token', data.token);
        })
    }

    render() {
        return (
            <div  className="column" >
                <h1>Stock Finder </h1>

                <Button waves='light' onClick ={this.handleGuestButton} >Login as Guest </Button>
                <form  action="" onSubmit = {this.handleSumbit}>
                <Row>
                <Input s={2} value= {this.state.username} type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange}/>
                <Input s={2} value= {this.state.password} type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                
                </Row>
                <Button  waves='light'> Login</Button>

                </form>

            </div>
        );
    }
}

export default Login;