import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLoggedCart } from '../../redux/Actions/cartActions'

const GetLoggedCartHook = () => {
    const dispatch = useDispatch()
    const [cartNumbers, setCartNumbers] = useState("0")
    const [totalPrice, setTotlePrice] = useState("0")
    const [cartProducts, setCartProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllLoggedCart());
            setLoading(false)
        }
        get();
    }, []);
    const res = useSelector(state => state.cartReducer.loggedCart);
    useEffect(() => {
        if (loading === false) {
            if (res && res.status === "success") {
                setCartNumbers(res.numOfCartItems)
                setCartProducts(res.data.products)
                setTotlePrice(res.data.totalCartPrice)
            } else {
                setCartNumbers("0")
                setCartProducts([])
                setTotlePrice("0")
            }
        }
    }, [loading]);

    return [cartNumbers, cartProducts, totalPrice]
}

export default GetLoggedCartHook