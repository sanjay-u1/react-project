import React from 'react'
import { Button, Card } from 'react-bootstrap'

import { LuEye } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'

function ProductCard({ product }) {
 
    return (
        <Card >
            <Card.Img variant="top" src={product.image.thumbnail} className='product-image' />
            <Card.Body className='bg-colour'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Title as="h1">${product.price}</Card.Title>
                <Card.Text>
                    {product.description.substring(0, 50)}...
                </Card.Text>
                <CartButton product={product}/>
                <Button as={Link} to={`/product/${product.slug}`} variant="outline-dark" className='ms-3'> <LuEye /> </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard