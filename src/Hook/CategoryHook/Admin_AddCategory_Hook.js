import React, { useEffect, useState } from 'react'
import { createCategory } from '../../redux/Actions/categoryAction'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from '../../Utility/Toastify'
import img from '../../assets/image/avatar.png'


const Admin_AddCategory_Hook = () => {
    const dispatch = useDispatch()
    const [categoryName, setCategoryName] = useState("")
    const [categoryImg, setCategoryImg] = useState(img)
    const [categoryPath, setCategoryPath] = useState(null)
    const [catLoading, setCatLoading] = useState(true)
    const [catPress, setCatPress] = useState(false)
    const res = useSelector(state => state.category.allCategory)
    const handelSelectImage = (event) => {
        event.persist()
        if (event.target.files && event.target.files[0]) {
            setCategoryImg(URL.createObjectURL(event.target.files[0]))
            setCategoryPath(event.target.files[0])
        }
    }

    const handelChangeCatName = (e) => {
        e.persist()
        setCategoryName(e.target.value);
    }

    const saveNewCategory = async (e) => {
        e.preventDefault()
        try {
            if (!navigator.onLine) {
                notify("Please check your internet connection", "warn")
                return;
            }
            if (categoryName === "" || categoryPath === null) {
                notify('please enter category data', 'warn')
                return;
            }
            let formData = new FormData()
            formData.append("name", categoryName)
            formData.append("image", categoryPath)
            setCatLoading(true)
            setCatPress(true)
            await dispatch(createCategory(formData))
            setCatLoading(false)
        } catch (e) { }
    }

    useEffect(() => {
        try {
            if (catLoading === false) {
                setCategoryImg(img)
                setCategoryPath(null)
                setCategoryName("")
                setCatLoading(true)
                setTimeout(() => {
                    setCatPress(false)
                }, 1000)
                if (res.status === 201) {
                    notify('Category added successfully', "success");
                }
                else {
                    notify('There is a problem with the addition process', "error");
                }
            }
        } catch (e) { }
    }, [catLoading]);

    return [catLoading, catPress, categoryImg, categoryName, handelChangeCatName, handelSelectImage, saveNewCategory]
}

export default Admin_AddCategory_Hook