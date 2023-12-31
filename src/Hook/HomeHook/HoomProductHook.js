import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/Actions/productAction';

const HoomProductHook = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, []);

    const product = useSelector(state => state.product.allProduct)
    const loading = useSelector(state => state.product.loading)

    let items = []
    try {
        if (product.data)
            items = product.data.slice(0, 8)
        else
            items = []
    } catch (e) { }

    return [items, loading]
}

export default HoomProductHook