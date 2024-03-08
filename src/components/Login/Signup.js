import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Particle from '../Particle';

export default class SignUp extends Component {
  render() {
    return (
      <section>
        <Particle />
        <Container className="login-content"> 
        
      <form>
      <h3 className='project-heading'><span className="purple">Sign Up</span></h3>
        <div className="mb-3">
          <label style={{marginTop:10}}>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <div className="forgot-password-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">Sign In?</a>
        </p>
        </div>
      </form>
      </Container>
      </section>
    )
  }
}