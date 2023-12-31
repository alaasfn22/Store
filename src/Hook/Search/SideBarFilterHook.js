import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../redux/Actions/categoryAction';
import { getBrand } from '../../redux/Actions/brandAction';
import ProductSearchHook from '../ProductHook/ProductSearchHook';

const SideBarFilterHook = () => {
    const [items, loading, pagecount, paginationSelected, results, getSearch] = ProductSearchHook()
    const dispatch = useDispatch()
    useEffect(() => {
        const getData = async () => {
            await dispatch(getCategory())
            await dispatch(getBrand())
        }
        getData()
    }, []);
    const allcategory = useSelector(state => state.category.allCategory)
    const allBrand = useSelector(state => state.brand.allBrand)
    let cat = [], brn = [];
    //store cat in array
    try {
        if (allcategory.data) {
            cat = allcategory.data;
        } else {
            cat = []
        }
    } catch (e) { }
    //store brand in array
    try {
        if (allBrand.data) {
            brn = allBrand.data;
        } else {
            brn = []
        }
    } catch (e) { }
    //hanedl checked input
    let queryCat = ""
    const [catchecked, setCatChecked] = useState([])
    const onClickCategory = (e) => {
        let value = e.target.value;
        if (value === "0") {
            setCatChecked([])
        } else if (value !== 0) {
            if (e.target.checked === true) {
                setCatChecked([...catchecked, value]);
            } else if (e.target.checked === false) {
                let newArray = catchecked.filter((e) => e !== value)
                setCatChecked(newArray)
            }
        }
    }

    useEffect(() => {
        queryCat = catchecked.map(val => "category[in][]=" + val).join("&")
        sessionStorage.setItem("catchecked", queryCat)
        setTimeout(() => {
            getSearch()
        }, 1000)
    }, [catchecked]);

    //when checked from brand
    const [brandChecked, setBrandChecked] = useState([])
    const onClickBrand = (e) => {
        let value = e.target.value;
        if (e.target.value === "0") {
            setBrandChecked([]);
        } else {
            if (e.target.checked === true) {
                setBrandChecked([...brandChecked, value])
            } else if (e.target.checked === false) {
                let newArray = brandChecked.filter((e) => e !== value)
                setBrandChecked(newArray)
            }
        }
    }
    let queryBrd = []
    useEffect(() => {
        queryBrd = brandChecked.map(val => `brand[in][]=${val}`).join('&')
        sessionStorage.setItem("brandchecked", queryBrd)
        setTimeout(() => {
            getSearch()
        }, 1000)
    }, [brandChecked]);

    //when enter range of price and make fileration
    const [fromm, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    const priceFrom = (e) => {
        sessionStorage.setItem("pricefrom", e.target.value)
        setFrom(e.target.value)
    }
    const priceTo = (e) => {
        sessionStorage.setItem("priceto", e.target.value)
        setTo(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            getSearch()
        }, 1000)
    }, [to, fromm]);
    return [cat, brn, onClickCategory, onClickBrand, priceFrom, priceTo]
}

export default SideBarFilterHook