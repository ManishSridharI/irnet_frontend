import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import { Left } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
        <section>
        <Particle />
        <Container className="login-content"> 
        
      <form>
        <h3 className='project-heading'><span className="purple">Sign In</span></h3>
        <div className="mb-3">
          <label style={{marginTop:10}}>Email address</label>
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              style={{marginRight:10 }}
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="forgot-password-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
        <p className="forgot-password text-left">
          Not a member? <Link to="/sign-up">Register</Link>
        </p>
      </div>
      </form>
      </Container>
      </section>
    )
  }
}