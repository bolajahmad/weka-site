import React from 'react'

import { Row, Col, Button} from 'react-bootstrap'


const Recommendations = () => {
    return (
        <>
            <Row id='review' style={{backgroundColor: 'rgb(0, 100, 0)'}}>
                <Col as='h3' sm={12} className='text-center'>
                    We are recommended by many
                </Col>

                <Col sm={12}>
                    <Row>
                        <Col sm={6}>
                            <div style={{width: '100px', borderRadius: '50%', float: 'left'}}></div>
                            <h5>Semantha Cole</h5>
                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        </Col>

                        <Col sm={6}>
                            <div style={{width: '100px', borderRadius: '50%', float: 'left'}}></div>
                            <h5>Semantha Cole</h5>
                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <div style={{width: '100px', borderRadius: '50%', float: 'left'}}></div>
                            <h5>Semantha Cole</h5>
                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        </Col>

                        <Col sm={6}>
                            <div style={{width: '100px', borderRadius: '50%', float: 'left'}}></div>
                            <h5>Semantha Cole</h5>
                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} className='text-center'>
                    <Button variant="success" style={{width: "60%"}}>
                        See all reviews
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default Recommendations