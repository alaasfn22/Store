import React, { useEffect, useState } from 'react'
import { notify } from '../../Utility/Toastify'
import { useDispatch, useSelector } from 'react-redux'
import { createBrand } from '../../redux/Actions/brandAction'
import img from '../../assets/image/avatar.png'

const Admin_AddBrand_Hook = () => {
    const dispatch = useDispatch()
    const [brandName, setCategoryName] = useState("")
    const [brandImg, setbrandImg] = useState(img)
    const [brandPath, setbrandPath] = useState(null)
    const [brandLoading, setBrandLoading] = useState(true)
    const [brandPress, setBrandPress] = useState(false)

    const res = useSelector(state => state.brand.allBrand)

    const handelBrandSelectImage = (event) => {
        event.persist()
        if (event.target.files && event.target.files[0]) {
            setbrandImg(URL.createObjectURL(event.target.files[0]))
            setbrandPath(event.target.files[0])
        }
    }

    const handelBrandChangeCatName = (e) => {
        e.persist()
        setCategoryName(e.target.value);
    }

    const saveNewBrand = async (e) => {
        e.preventDefault()
        try {
            if (!navigator.onLine) {
                notify("Please check your internet connection", "warn")
                return;
            }
            if (brandName === "" || brandPath === null) {
                notify('please enter brand data', 'warn')
                return;
            }
            let formData = new FormData()
            formData.append("name", brandName)
            formData.append("image", brandPath)
            setBrandLoading(true)
            setBrandPress(true)
            await dispatch(createBrand(formData))
            setBrandLoading(false)
        } catch (e) { }
    }

    useEffect(() => {
        try {
            if (brandLoading === false) {
                setbrandImg(img)
                setBrandPress(null)
                setCategoryName("")
                setBrandLoading(true)
                setTimeout(() => {
                    setBrandPress(false)
                }, 1000)
                if (res.status === 201) {
                    notify('Brand added successfully', "success");
                }
                else {
                    notify('There is a problem with the addition process', "error");
                }
            }
        } catch (e) { }
    }, [brandLoading]);

    return [brandImg, brandName, brandLoading, brandPress, handelBrandChangeCatName, handelBrandSelectImage, saveNewBrand]
}

export default Admin_AddBrand_Hook