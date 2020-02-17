import React from 'react'

import { Row, Col } from 'react-bootstrap'


const Contact = () => {
    return (
        <>
            <Row style={{padding: '5em'}}>
                <Col sm={12} className='text-center pb-4' style={{border: '1px solid green'}}>
                    Image Goes Here
                    {/* <Image /> */}
                </Col>

                <Col>
                    <Row>
                        <Col as='h3' sm={12} className='text-center pt-4 pb-2' style={{color: 'silver'}}>
                            Contact
                        </Col>
                        <Col as='p' sm={12} style={{color: 'rgb(0, 100, 0)', fontWeight: 'bold', textAlign: 'center'}}>+234 905 5555 888</Col>
                        <Col as='p' sm={12} style={{color: 'rgb(0, 100, 0)', fontWeight: 'bold', textAlign: 'center'}}>weka@gmail.com</Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Contact