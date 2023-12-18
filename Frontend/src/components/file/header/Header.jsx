import React, { useRef, useContext } from 'react'
import './Header.css';

import { AuthContext } from '../../../context/AuthContext';

import { Container, Row, Button } from 'react-bootstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import header_logo from '../../Image/logo.jpg'


const Header = () => {
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const {user, dispatch} = useContext(AuthContext)

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
     }

  return <header className='header' ref={headerRef}>
    <Container>
        <Row>

        <div className='head d-flex align-items-center justify-content-between gap-4'>

        <div className='col-1 m-0 p-0' id='header-img'>
                <img src={header_logo} alt="JSR Resort"></img>
            </div>

            <div className='col-8 p-4'>
                <div class="nav-links float-right headermain">
                    <NavLink to="/" class="nav-link" id='header-nav-item1'><i class="fas fa-home"></i> Home </NavLink>
                    <NavLink to="./about" class="nav-link" id='header-nav-item2'><i class="fas fa-eye"></i> About </NavLink>
                    <NavLink to="./rl" class="nav-link" id='header-nav-item3'><i class="fas fa-person-booth"></i> Rooms</NavLink>
                    <NavLink to="./contact" class="nav-link" id='header-nav-item4'><i class="fas fa-paper-plane"></i> Contact </NavLink>
                    <NavLink to="./bk" class="nav-link" id='header-nav-item4'> Book Now </NavLink>
                    
                </div>
            </div>

        <div className="nav_right d-flex align-items-center gap-4">
            <div className="Menubar nav_btns d-flex align-items-center gap-2">

            {
                user ? (
                <>
                    <h5 className='user mb-0'>Hello {user.username} </h5>
                    <Button className='btn btn-dark' onClick={logout}><i class="fas fa-right-from-bracket"></i> Logout</Button>
                </>
                ) : (
                    <>
                        <Button><Link className='Login' to='/login'><i class="fas fa-user"></i> Login</Link></Button>
                        <Button><Link className='Register' to='/register'><i class="fas fa-user-plus"></i> Register</Link></Button>
                    </>
                )
            }

            </div>
        </div>
        </div>
        
        </Row>
    </Container>
  </header>
}
export default Header
