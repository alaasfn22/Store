import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/Actions/categoryAction';

const Admin_View_CategoryHook = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
    }, []);
    const cat = useSelector(state => state.category.allCategory)
    const loading = useSelector(state => state.category.loading)
    let category = []
    try {
        if (cat.data) {
            category = cat.data
        }
        else {
            category = []
        }
    } catch (e) { }

    return [category, loading]
}

export default Admin_View_CategoryHook