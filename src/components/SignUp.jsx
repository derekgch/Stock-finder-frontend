import React, { Component } from 'react';
import { Button, Row, Input  } from 'react-materialize'
import {URL, local_URL} from '../Adapter';


class SignUp extends Component {
    state = {
        name: '',
        username: '',
        password: '',
    }
    handleChange = (event) => {
      this.setState({
          [event.target.name] : event.target.value
      })
    }

    handleErrors(response) {
        console.log(response)
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    handleSubmit = (event) => {
        event.preventDefault()
      const API = local_URL+'users'
      const config = {
          method: 'POST',
          headers: {"Content-type":"application/json"},
          body: JSON.stringify(this.state)
      }
      fetch(API, config).then(this.handleErrors).then( d => {
        console.log(d)
        if(d.token){
            localStorage.setItem('token', d.token)
            this.props.history.push('/')
        }else{
            alert(Object.keys(d)+" "+ d[Object.keys(d)]);
        }
      }).catch(function(error) {
        alert("username already taken!")
        })
    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                    <Input type="text" placeholder="Name" name="name" 
                    onChange={this.handleChange}
                    value={this.state.name}
                     />
                    <Input type="text" placeholder="Username" name="username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                     />
                    <Input type="password" placeholder="Password" name="password" 
                    onChange={this.handleChange}
                    value={this.state.password}
                     />
                     </Row>
                     <Button> Create Account </Button>
                    {/* <input type="submit" value="Create Account"/> */}
                </form>    
            </div>
        );
    }
}

export default SignUp;
