import React from 'react'
import { Button } from 'react-bootstrap'
import { LuShoppingCart } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../redux/reducers/CartReducers'
import { toast } from 'react-toastify'

function CartButton({ product }) {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.carts)

    const checkInCart = (carts) => {
        if (carts.length === 0) {
            return true;
        } else {
            var temp = carts.filter(item => item.id === product.id)
            return temp.length === 0 ? true : false;
        }
    }

    const addToCart = (data) => {
        if (checkInCart(cartProducts)) {
            dispatch(setCartItems(data))
            toast.success('Product Added to cart')
        } else {
            toast.error('Product Already in cart!')
        }
    }
    return (
        <Button variant="dark" onClick={() => addToCart(product)}> <LuShoppingCart /> Add to cart</Button>
    )
}

export default CartButton