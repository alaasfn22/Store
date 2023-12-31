import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCounter } from '../../redux/Actions/cartActions'

const UpDateCountCartHook = (cartProducts) => {
    const dispatch = useDispatch()

    const [counter, setCounter] = useState("0")

    const handelChangecont = (e, id) => {
        setCounter(e.target.value)

    }


    useEffect(() => {
        if (cartProducts !== null) {
            setCounter((prev) => cartProducts.map((data) => prev = data.count))
        }
    }, [cartProducts]);
    return [counter, handelChangecont]
}

export default UpDateCountCartHook