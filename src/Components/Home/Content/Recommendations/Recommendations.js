import React from 'react'

import { Row, Col, Button} from 'react-bootstrap'


const reviewStyles = {
    width: '200px', 
    borderRadius: '50%', 
    float: 'left', 
    border: '1px solid white'
};

const Recommendations = () => {
    return (
        <>
            <Row id='review' style={{backgroundColor: 'rgb(0, 100, 0)', padding: '5em', color: 'white'}}>
                <Col as='h3' sm={12} className='text-center pb-3'>
                    We are recommended by many
                </Col>

                <Col sm={12}>
                    <Row>
                        <Col sm={6}>
                            <div style={{reviewStyles}}></div>
                            <div>
                                <h5>Semantha Cole</h5>
                                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div style={{reviewStyles}}></div>
                            <div>
                                <h5>Semantha Cole</h5>
                                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <div style={{reviewStyles}}></div>
                            <div>
                                <h5>Semantha Cole</h5>
                                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div style={{reviewStyles}}></div>
                            <div>
                                <h5>Semantha Cole</h5>
                                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                            </div>
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