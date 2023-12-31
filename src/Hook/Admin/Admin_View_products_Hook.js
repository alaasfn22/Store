import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProduct } from '../../redux/Actions/productAction';

const Admin_View_products_Hook = () => {
    const dispatch = useDispatch()
    const getProducts = async () => {
        await dispatch(getSearchProduct())
    }
    useEffect(() => {
        getProducts()
    }, []);

    const product = useSelector(state => state.product.allProduct)
    const loading = useSelector(state => state.product.loading)

    let items = []
    try {
        if (product.data)
            items = product.data
        else
            items = []
    } catch (e) { }
    return [items, loading]
}

export default Admin_View_products_Hook