import React, { Component } from 'react';

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

    handleSubmit = (event) => {
        event.preventDefault()
      const API = 'http://localhost:4000/users'
      const config = {
          method: 'POST',
          headers: {"Content-type":"application/json"},
          body: JSON.stringify(this.state)
      }
      fetch(API, config).then(r => r.json()).then( d => {
        localStorage.setItem('token', d.token)
        this.props.history.push('/')
      })
    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" name="name" 
                    onChange={this.handleChange}
                    value={this.state.name}
                     />
                    <input type="text" placeholder="Username" name="username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                     />
                    <input type="password" placeholder="Password" name="password" 
                    onChange={this.handleChange}
                    value={this.state.password}
                     />
                    <input type="submit" value="Create Account"/>
                </form>    
            </div>
        );
    }
}

export default SignUp;
