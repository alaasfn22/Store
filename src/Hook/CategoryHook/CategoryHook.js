import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getCategoryPagination } from '../../redux/Actions/categoryAction';

const CategoryHook = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory(20))
    }, []);

    const category = useSelector(state => state.category.allCategory)
    const loading = useSelector(state => state.category.loading)
    let pageCount = 0;

    try {
        if (category.paginationResult) {
            pageCount = category.paginationResult.numberOfPages;
        }
        else {
            pageCount = 0
        }
    } catch (e) { }
    const paginationSelected = (page) => {
        dispatch(getCategoryPagination(page, 20))
    }
    return [category, loading, pageCount, paginationSelected]
}

export default CategoryHook