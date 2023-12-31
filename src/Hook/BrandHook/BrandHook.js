import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBrand, getBrandPagination } from '../../redux/Actions/brandAction';

const BrandHook = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBrand(20))
    }, []);
    const brand = useSelector(state => state.brand.allBrand)
    const loading = useSelector(state => state.brand.loading)


    let pageCount = 0;

    try {
        if (brand.paginationResult) {
            pageCount = brand.paginationResult.numberOfPages
        }
        else {
            pageCount = 0
        }
    } catch (e) {

    }
    const paginationSelected = (page) => {
        dispatch(getBrandPagination(page, 20))
    }
    return [brand, loading, pageCount, paginationSelected]
}

export default BrandHook