import React from 'react'

import { Row, Col } from 'react-bootstrap'


const Contact = () => {
    return (
        <>
            <Row>
                <Col sm={12} className='text-center'>
                    Image Goes Here
                    {/* <Image /> */}
                </Col>

                <Col>
                    <Row>
                        <Col as='h3' sm={12} className='text-center'>
                            Contact
                        </Col>
                        <Col as='p' style={{color: 'rgb(0, 100, 0)', fontWeight: 'bold'}}>+234 905 5555 888</Col>
                        <Col as='p' style={{color: 'rgb(0, 100, 0)', fontWeight: 'bold'}}>weka@gmail.com</Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Contact