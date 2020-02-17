import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'


const Profits = () => {
    return (
        <>
            <Row>
                <Col sm={12} md={6} className='text-center' style={{padding: '10em'}}>
                    Image Goes here
                    {/* <Image /> */}
                </Col>

                <Col sm={12} md={6} style={{background: "green", padding: "1em", color: 'white'}}>
                    <Row>
                        <Col as='h3' sm={12} className='text-center'>
                            Make Profits
                        </Col>

                        <Col as='p' sm={12} className='text-left'>
                            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
                        </Col>

                        <Col sm={12} className='text-center'>
                            <Button variant="success" style={{width: "60%"}}>
                                Sign Up
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
};

export default Profits