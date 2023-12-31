import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/Actions/categoryAction';
import { notify } from '../../Utility/Toastify';
import { creatSubCategory } from '../../redux/Actions/subCategoryAction';

const Sub_Category_Hook = () => {
    const [id, setId] = useState('0')
    const [subName, setSubName] = useState("")
    const [subLoading, setSubLoading] = useState(true)
    const [subPress, setSubPress] = useState(false)

    const dispatch = useDispatch()
    const getCategoryData = async () => {
        await dispatch(getCategory())
    }
    getCategory()
    useEffect(() => {
        try {
            if (!navigator.onLine) {
                notify("There is a problem with the internet", "error")
            }
            getCategoryData()
        } catch (e) { }
    }, []);

    // get category data from redux state
    const cat = useSelector(state => state.category.allCategory)
    // get category data from redux state
    const subcat = useSelector(state => state.subcategory.subCategory)
    let category = []
    try {
        if (cat.data) {
            category = cat.data
        } else {
            category = []
        }
    } catch (error) { }

    const handelSubName = (e) => {
        e.persist()
        setSubName(e.target.value)
    }
    const handelSelectOption = (e) => {
        e.persist()
        console.log(e.target.value)
        setId(e.target.value)
    }

    //when click to save subcategory data
    const saveSubCategory = async (e) => {
        e.preventDefault()
        if (!navigator.onLine) {
            notify("there is no connection", "war");
        }
        if (id === "0") {
            notify("Please select a subcategory ", "warn"); return;
        }
        if (subName === "") {
            notify("Please enter name of your subcategory", "warning"); return;
        }
        setSubLoading(true)
        setSubPress(true)
        await dispatch(creatSubCategory({ name: subName, category: id }))
        setSubLoading(false)
    }

    useEffect(() => {
        try {
            if (subLoading === false) {
                setId("0")
                setSubName("")
                setSubLoading(true)
                setTimeout(() => {
                    setSubPress(false);
                }, 1000)
                if (subcat.status === 201) {
                    notify('subcategory created successfully', 'success')
                } else if (subcat === "ErrorAxiosError: Request failed with status code 400") {
                    notify('This name is duplicate, please choose another name', 'warn')
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000)
                }
                else {
                    notify(`${subcat?.message}`, 'error');
                }
            }
        } catch (e) { }

    }, [subLoading]);

    return [category, subName, subLoading, subPress, handelSubName, handelSelectOption, saveSubCategory]
}

export default Sub_Category_Hook