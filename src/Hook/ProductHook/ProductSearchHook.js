import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductPagination, getSearchProduct } from '../../redux/Actions/productAction';
import { useState } from 'react';

const ProductSearchHook = () => {

    const dispatch = useDispatch()
    let limit = 12;
    const getSearch = async () => {
        sortData()
        getStorage()
        await dispatch(getSearchProduct(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}${pricefromString}${priceToString}`))
    }
    useEffect(() => {
        getSearch()
    }, []);

    const product = useSelector(state => state.product.allProduct)
    const loading = useSelector(state => state.product.loading)

    //get all products
    const [items, setItems] = useState([])
    useEffect(() => {
        try {
            if (product.data)
                setItems(product.data)
        } catch (e) { }
    }, [product]);


    //get all results
    const [results, setResults] = useState([])
    useEffect(() => {
        try {
            if (product.results)
                setResults(product.results)
        } catch (e) { }
    }, []);


    //get pagecount of pagination
    let pagecount = 0;
    try {
        if (product.paginationResult)
            pagecount = product.paginationResult.numberOfPages
        else
            pagecount = 0
    } catch (e) { }
    //gat item in page selected
    const paginationSelected = (page) => {
        sortData()
        getStorage()
        dispatch(getProductPagination(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${pricefromString}${priceToString}`))
    }


    //get storage
    let word = "", queryCat = "", queryBrand = "", priceTo = "", priceFrom = "";
    let pricefromString = "", priceToString = "";

    const getStorage = () => {

        if (window.sessionStorage.getItem("searchword") !== null)
            word = window.sessionStorage.getItem("searchword")

        if (sessionStorage.getItem("catchecked") !== null)
            queryCat = sessionStorage.getItem("catchecked")

        if (sessionStorage.getItem("brandchecked") !== null)
            queryBrand = sessionStorage.getItem("brandchecked")

        if (sessionStorage.getItem("pricefrom") !== null)
            priceFrom = sessionStorage.getItem("pricefrom")

        if (sessionStorage.getItem("priceto") !== null)
            priceTo = sessionStorage.getItem("priceto")


        if (priceFrom === "" || priceFrom <= 0) {
            pricefromString = ""
        } else {
            pricefromString = `&price[gt]=${priceFrom}`
        }

        if (priceTo === "" || priceTo <= 0) {
            priceToString = ""
        } else {
            priceToString = `&price[lte]=${priceTo}`
        }

    }
    // when  sort  data 
    let sortType = "", sort = "";
    const sortData = () => {
        if (sessionStorage.getItem("sort") !== null) {
            sortType = sessionStorage.getItem("sort")
        } else {
            sortType = ""
        }

        if (sortType === "Out of order") {
            sort = ""
        }
        if (sortType === "Price From lowest to highest") {
            sort = "+price"
        }
        if (sortType === "Price From highest to lowest") {
            sort = "-price"
        }
        if (sortType === "Highest rated") {
            sort = "-ratingsQuantity"
        }
        if (sortType === "best seller") {
            sort = "-sold"
        }
        if (sortType === "quantity") {
            sort = "-quantity"
        }
    }

    return [items, loading, pagecount, paginationSelected, results, getSearch]
}

export default ProductSearchHook