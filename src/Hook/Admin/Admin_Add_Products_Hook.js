import React, { useEffect, useState } from 'react'
import { notify } from '../../Utility/Toastify'
import { createProduct } from '../../redux/Actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/Actions/categoryAction'
import { getBrand } from '../../redux/Actions/brandAction'
import { getSubCatById } from '../../redux/Actions/subCategoryAction'
import { ru } from '@faker-js/faker'

const Admin_Add_Products_Hook = () => {
    const dispatch = useDispatch()
    const [showColor, setShowColor] = useState(false)
    const [colors, setColors] = useState([])
    const [loading, setLoading] = useState(true)

    const getDataOptions = async () => {
        await dispatch(getCategory())
        await dispatch(getBrand())
    }
    useEffect(() => {
        getDataOptions();
    }, []);

    const catres = useSelector(state => state.category.allCategory)
    const brandres = useSelector(state => state.brand.allBrand)
    const res = useSelector(state => state.product.allProduct)
    let categoryData = [], brandData = [];
    try {
        if (catres.data) {
            categoryData = catres.data
        } else {
            categoryData = []
        }
    } catch (e) { }

    try {
        if (brandres.data) {
            brandData = brandres.data
        } else {
            brandData = []
        }
    } catch (e) { }
    //handel show color
    const handelShowColorPicker = (e) => {
        e.preventDefault();
        setShowColor(!showColor)
    }
    //start handel text from input type
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priceAfter, setPriceAfter] = useState("")
    const [quntity, setQuntity] = useState("")
    const [images, setImages] = useState({});
    const handelInputName = (e) => {
        e.persist();
        setName(e.target.value);
    }
    const handelInputDescription = (e) => {
        e.persist();
        setDescription(e.target.value)
    }

    const handelInputPriceAfter = (e) => {
        e.persist();
        setPriceAfter(e.target.value)
    };

    const handelInputQuntity = (e) => {
        e.persist();
        setQuntity(e.target.value);
    }

    //end handel text from input type

    //when select color store in state
    const handelSelectColor = (color) => {
        //add color to state and remove dublicated color
        setColors([...new Set([...colors, color.hex])])
    }
    //when want to remove color
    const ColorRemove = (colorRemove) => {
        let newArrColor = colors.filter((color) => color !== colorRemove)
        setColors(newArrColor)
    }

    //when select cat and brand
    const [catId, setCatId] = useState("0")
    const [brandId, setBrandId] = useState("0")
    const [subCatId, setSubCatId] = useState([])

    const resSub = useSelector(state => state.subcategory.subCategory)

    const onSelect = (selectedList) => {
        setSubCatId(selectedList)
    }
    const onRemove = (selectedList) => {
        setSubCatId(selectedList)
    }
    const [options, setOptions] = useState([]);
    const handelChoiseCategory = async (e) => {
        setCatId(e.target.value)
    }
    useEffect(() => {
        if (catId != 0) {
            const run = async () => {
                await dispatch(getSubCatById(catId))
            }
            run()
        }
    }, [catId]);

    useEffect(() => {
        if (resSub.data) {
            setOptions(resSub.data)
        } else {
            setOptions([])
        }

    }, [resSub.data]);



    const handelChoiseBrand = (e) => {
        e.persist()
        setBrandId(e.target.value)
    }

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    const saveNewProduct = async (e) => {
        e.preventDefault()
        if (name === "" || images === null || description === "" || priceAfter === "" || quntity === "" || brandId === "0" || catId === "0") {
            notify("please complete data ", "warn"); return;
        }

        const coverImage = dataURLtoFile(images[0], Math.random() + ".png");
        //convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )

        const formData = new FormData()
        formData.append("title", name)
        formData.append("description", description)
        formData.append("price", priceAfter)
        formData.append("category", catId)
        formData.append("brand", brandId)
        formData.append("quantity", quntity)
        formData.append("imageCover", coverImage)
        colors.map((color) => formData.append("availableColors", color))
        itemImages.map((imgs) => formData.append("images", imgs))
        subCatId.map((item) => formData.append("subcategory", item._id))
        setLoading(true)
        await dispatch(createProduct(formData))
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
            setBrandId("0")
            setCatId("0")
            setName("")
            setDescription("")
            setPriceAfter("")
            setQuntity("")
            setImages({})
            setSubCatId([])
            setColors([])
            if (res.status === 201) {
                notify("The product has been added successfully", "success")
            } else {
                notify("Failed to add product", "error")
            }
        }
        setLoading(true)
    }, [loading]);

    return [colors, showColor, name, description, priceAfter, quntity, images, options, handelInputName, handelInputDescription,
        handelInputPriceAfter, handelInputQuntity, handelChoiseBrand, handelChoiseCategory, categoryData, brandData,
        saveNewProduct, setImages, handelSelectColor, handelShowColorPicker, onRemove, onSelect, ColorRemove]
}

export default Admin_Add_Products_Hook