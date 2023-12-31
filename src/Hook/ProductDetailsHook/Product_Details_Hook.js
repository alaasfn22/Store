import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProductLike } from '../../redux/Actions/productAction';
import { getOneCategory } from '../../redux/Actions/categoryAction';
import { getOneBrand } from '../../redux/Actions/brandAction';

const Product_Details_Hook = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [id]);
    const product = useSelector(state => state.product.oneProduct)
    const loading = useSelector(state => state.product.loading)
    const productLike = useSelector(state => state.product.productLike)
    const oneCategory = useSelector(state => state.category.oneCategory)
    const oneBrand = useSelector(state => state.brand.oneBrand)
    //get one products
    let item = []
    try {
        if (product.data)
            item = product.data
        else
            item = []
    } catch (e) { }

    //create array of imageGallery 
    let dataImages = []
    try {
        if (item.images) {
            dataImages = item.images
        }
        else {
            dataImages = []
        }
    } catch (e) { }

    //save imagecover in array 
    let imageCover = []
    try {
        if (item.imageCover) {
            imageCover = item.imageCover
        }
        else {
            imageCover = []
        }
    } catch (e) { }
    //end save array of images
    useEffect(() => {
        if (item.category)
            dispatch(getOneCategory(item.category))
        if (item.brand)
            dispatch(getOneBrand(item.brand))
        if (item.category)
            dispatch(getProductLike(item.category))
    }, [item]);
    //save brand data from product details by id
    let brand = []
    try {
        if (oneBrand.data) {
            brand = oneBrand.data
        }
        else {
            brand = []
        }
    } catch (e) { }
    //save category data from product details by id
    let category = []
    try {
        if (oneCategory.data) {
            category = oneCategory.data
        }
        else {
            category = []
        }
    } catch (e) { }
    //save category data from product details by id
    let prod = []
    try {
        if (productLike) {
            prod = productLike
        }
        else {
            prod = []
        }
    } catch (e) { }
    return [item, dataImages, imageCover, brand, category, prod, loading]

}

export default Product_Details_Hook