import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const product = ({product}) => {
  return (
    <>
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>  
                <Card.Img src={product.image} variant="top"/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>    
                    <Card.Title as="div">
                        <strong>{product.name}</strong>     
                    </Card.Title>
                </Link>    
                <Card.Text as="h6">
                    <div className="my-3">
                        <strong>{product.description}</strong>
                    </div>
                </Card.Text>
                <Card.Text as="h4" align="right">$89.99</Card.Text> 
            </Card.Body>
        </Card>
    </>
  )
}

export default product
