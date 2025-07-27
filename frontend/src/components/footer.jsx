import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
        <footer/>    
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        &copy; Bridget Boutique {currentYear} | All rights reserved.
                    </Col>
                </Row>
            </Container>    
    </>
  )
}

export default footer
