import React from 'react'

import { Container } from 'react-bootstrap'

import Partnership from './Partnership/Partnership'
import Profits from './Profits/Profits'
import Recommendations from './Recommendations/Recommendations'
import Contact from './Contact/Contact'

const Content = () => {
    return (
        <Container fluid>
            <Partnership />
            <Profits />
            <Recommendations />
            <Contact />
        </Container>
    )
}

export default Content