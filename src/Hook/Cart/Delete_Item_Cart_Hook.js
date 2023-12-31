import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllLoggedCart, removespecificCart } from '../../redux/Actions/cartActions'
import { notify } from '../../Utility/Toastify'
const Delete_Item_Cart_Hook = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)


    const clearAll = async () => {
        setLoading(true)
        await dispatch(clearAllLoggedCart())
        setLoading(false)
    }
    const res = useSelector(state => state.cartReducer.clearAll)
    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                notify("Deleted Successfully", "success");
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }

    }, [loading]);

    // when click remove one item
    const removeofCart = async (id) => {
        await dispatch(removespecificCart(id))
        window.location.reload(false)
    }

    return [clearAll, removeofCart]
}

export default Delete_Item_Cart_Hook