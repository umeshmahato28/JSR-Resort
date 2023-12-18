import React, { useContext, useState } from 'react'
import '../css/Login.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate  } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext'


const Login = () => {
  const [credentials, setCredentials] = useState({
     email: undefined,
     password: undefined
  })

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
     setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async e => {
     e.preventDefault()

     dispatch({type:'LOGIN_START'})

     try {
        const res = await fetch(`http://localhost:4000/api/v1/auth/login`, {
           method:'post',
           headers: {
              'content-type':'application/json'
           },
           credentials:'include',
           body: JSON.stringify(credentials)
        })

        const result = await res.json()
        if(!res.ok) alert(result.message)
        console.log(result.data)

        dispatch({type:"LOGIN_SUCCESS", payload:result.data})
        navigate('/')
     } catch(err) {
        dispatch({type:"LOGIN_FAILURE", payload:err.message})
     }
  }

  return (
     <section className='first'>
        <Container>
           <Row>
              <Col lg='8' className='m-auto'>
                 <div className="login__container d-flex justify-content-between">
                    <div className="login__img">
                       <img src="https://egymerch.com/site_assets/assets/imgs/login/login.png" alt="" />
                    </div>
                    <div className="login__form">
                       <div className="user">
                          <img src="https://icon-library.com/images/user-png-icon/user-png-icon-8.jpg" alt="" />
                       </div>
                       <h2>Login</h2>

                       <Form onSubmit={handleClick}>
                          <FormGroup>
                             <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                          </FormGroup>
                          <FormGroup>
                             <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                          </FormGroup>
                          <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                       </Form>
                       <p>Don't have an account? <Link to='/register'>Create</Link></p>
                    </div>
                 </div>
              </Col>
           </Row>
        </Container>
     </section>
  )
}

export default Login