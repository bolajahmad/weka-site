import React from 'react'

import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'


import './Header.scss'

const navbarStyles = {
    margin: 0,
    padding: 0
};

const innerWrapperStyles = {
    position: "relative",
};

const mottoStyles = {
    color: "white",
    width: "400px",
    height: "auto",
    paddingRight: "3em",
    marginTop: "3em",
    fontSize: "1.5rem"
};

const buttonStyles = {
    color: "rgb(0, 54, 0)", 
    background: "white", 
    border: "1px solid white",
    borderRadius: "10px",
    paddingLeft: "1em", 
    marginRight: "3em", 
    marginTop: "2em",
    width: "40%"
};

const Header = () => {
    return (
        <Container className="wrapper" fluid>
            <Navbar style={navbarStyles} bg='success' fixed='top'>
                <Container style={innerWrapperStyles}>
                    <Navbar.Brand href="/">WEKA</Navbar.Brand>

                    <Navbar.Collapse id="basic-nav-toggle">
                        <Nav style={{position: "absolute", right: "0", paddingRight: "10px"}}>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="#review">Review</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Row style={{paddingBottom: "3em"}}>
                <Col sm={12} className="text-right" style={mottoStyles}>
                    <h1>
                        Invest. <br />
                        Profit. <br />
                        Invest Again. <br />
                    </h1>
                </Col>

                <Col sm={{span: "3", offset: "9"}}>
                    <Button style={buttonStyles}>Sign In</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header