import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'


const placeholder = {
    background: 'rgba(220, 220, 220, 0.6)',
    border: '1px solid blue',
    borderRadius: '10px',
    width: '100%',
    height: '100px',
};


const Partnership = () => {
    return (
        <>
            <Row>
                <Col sm={12} md={6}>
                    <Row>
                        <Col as='h3' sm={12}>
                            Partner with us and meet new investors
                        </Col>

                        <Col as='p' sm={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec rutrum ipsum, id cursus sapien. Mauris mollis cursus dui et maximus. Nam congue nisl ac risus elementum porta. Donec sapien orci, egestas ornare viverra ut, sodales vel est. Suspendisse et nisi ligula. Nulla consequat maximus sapien. Ut non efficitur leo, eget elementum enim
                        </Col>

                        <Col sm={12} className='text-center'>
                            <Button variant="success" style={{width: "60%"}}>
                                Create a project
                            </Button>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} md={6}>
                    <Row>
                        <Col style={placeholder} sm={{span: '4', offset: '2'}}>
                            {/* <Image /> */}
                        </Col>
                        <Col style={placeholder} sm={{span: '4', offset: '2'}}>
                           {/*  <Image /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col style={placeholder} sm={4}>
                            {/* <Image /> */}
                        </Col>
                        <Col style={placeholder} sm={{span: '4', offset: '2'}}>
                           {/*  <Image /> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Partnership