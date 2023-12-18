import React from 'react'
import '../css/ThankYou.css'

import { Container, Row, Col} from 'reactstrap'
import { Link } from "react-router-dom"

import { RiShieldCheckFill } from "react-icons/ri";

const ThankYou = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12'>
                <div className='thank_you'>
                    <span><i class="ri-checkbox"><RiShieldCheckFill/></i></span>
                    <h1 className='mb-3'>Thank You</h1>
                    <h3 className='mb-4'>Your Tour is Booked</h3>

                    <button className='btn w-25'><Link className='Back' to='/'>Back to Home</Link></button>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default ThankYou