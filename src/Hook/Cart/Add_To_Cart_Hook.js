import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from '../../Utility/Toastify'

import { addProductToCart } from '../../redux/Actions/cartActions'

const Add_To_Cart_Hook = (proId, item) => {
    const dispatch = useDispatch()
    const [colorCheck, setColorCheck] = useState("")
    const [color, setColor] = useState("")
    const [loading, setLoading] = useState(true)
    //when select color add active class
    const handelSelectColor = (colorindex, color) => {
        setColorCheck(colorindex)
        setColor(color)
    }

    //when select new product remove active color
    useEffect(() => {
        setColorCheck("")
    }, [proId]);
    const res = useSelector(state => state.cartReducer.addToCart)

    //when add to cart
    const onAddProductToCart = async () => {
        if (item.availableColors.length >= 1) {
            if (color === "") {
                notify("please select color", "warn")
                return
            }
        } else {
            setColor("")
        }
        setLoading(true)
        await dispatch(addProductToCart({
            productId: proId,
            color: color,
        }))
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
            if (res.status === 200) {
                notify("Product added successfully to your cart", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else if (res.status !== 200) {
                notify("Please log in first", "error")
                return;
            }
        }
        setColor("")
        setColorCheck("")
    }, [loading]);
    return [colorCheck, handelSelectColor, onAddProductToCart]
}

export default Add_To_Cart_Hook