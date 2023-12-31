import React, { useEffect, useState } from 'react'
import { createProduct, getOneProduct, updateProduct } from '../../redux/Actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/Actions/categoryAction'
import { getBrand } from '../../redux/Actions/brandAction'
import { getSubCatById } from '../../redux/Actions/subCategoryAction'
import { notify } from '../../Utility/Toastify'
const Admin_Edit_Product_Hook = (id) => {
    const dispatch = useDispatch()
    const [showColor, setShowColor] = useState(false)
    const [colors, setColors] = useState([])
    const [loading, setLoading] = useState(true)

    const getDataOptions = async () => {
        await dispatch(getCategory())
        await dispatch(getBrand())
        await dispatch(getOneProduct(id))
    }
    useEffect(() => {
        getDataOptions();
    }, []);

    const catres = useSelector(state => state.category.allCategory)
    const brandres = useSelector(state => state.brand.allBrand)
    const updateRes = useSelector(state => state.product.updateProduct)
    const item = useSelector(state => state.product.oneProduct)
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

    // get product data by id and view 
    let itemId = ""
    if (item.data) { itemId = item.data._id }
    useEffect(() => {
        try {
            if (item.data) {
                setName(item.data.title)
                setDescription(item.data.description)
                setPriceAfter(item.data.price)
                setQuntity(item.data.quantity)
                setColors(item.data.availableColors)
                setImages(item.data.images)
                setCatId(item.data.category)
                setBrandId(item.data.brand)
            }
        } catch (e) { }

    }, [itemId]);

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
    const [catId, setCatId] = useState("")
    const [brandId, setBrandId] = useState("")
    const [subCatId, setSubCatId] = useState([])

    const resSub = useSelector(state => state.subcategory.subCategory)
    const handelChoiseCategory = async (e) => {
        setCatId(e.target.value)
    }
    const [options, setOptions] = useState([]);
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
    }, [resSub]);
    const onSelect = (select) => {
        setSubCatId(select)
    }
    const onRemove = (select) => {
        setSubCatId(select)
    }

    const handelChoiseBrand = (e) => {
        e.persist()
        setBrandId(e.target.value)
    }

    //covert base64 to file
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

    //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };
    const saveNewProduct = async (e) => {
        e.preventDefault()
        if (name === "" || images === null || description === "" || priceAfter === "" || quntity === "" || brandId === "0" || catId === "0") {
            notify("please complete data ", "warn"); return;
        }
        let coverImage;
        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then(val => coverImage = val)
        } else {
            coverImage = dataURLtoFile(images[0], Math.random() + ".png");
        }

        //convert array of base 64 image to file 
        let itemImages = []
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(val => itemImages.push(val))
                } else {
                    return dataURLtoFile(images[index], Math.random() + ".png")
                }

            }
        )

        const formData = new FormData()
        formData.append("title", name)
        formData.append("description", description)
        formData.append("price", priceAfter)
        formData.append("category", catId)
        formData.append("brand", brandId)
        formData.append("quantity", quntity)

        colors.map((color) => formData.append("availableColors", color))
        setTimeout(() => {
            formData.append("imageCover", coverImage)
            itemImages.map((imgs) => formData.append("images", imgs))
        }, 1000)
        subCatId.map((item) => formData.append("subcategory", item._id))
        setTimeout(async () => {
            setLoading(true)
            await dispatch(updateProduct(id, formData))
            setLoading(false)
        }, 1000)


    }


    useEffect(() => {
        if (loading === false) {
            setBrandId("")
            setCatId("")
            setName("")
            setDescription("")
            setPriceAfter("")
            setQuntity("")
            setImages({})
            setSubCatId(null)
            setColors([])
            setTimeout(() => {
                setLoading(true)
            }, 1500);
            if (updateRes) {
                if (updateRes.status === 200) {
                    notify("The product has been added successfully", "success")
                } else {
                    notify("Failed to add product", "error")
                }
            }

        }

    }, [loading]);

    return [catId, brandId, colors, showColor, name, description, priceAfter, quntity, images, options, handelInputName, handelInputDescription,
        handelInputPriceAfter, handelInputQuntity, handelChoiseBrand, handelChoiseCategory, categoryData, brandData,
        saveNewProduct, setImages, handelSelectColor, handelShowColorPicker, onRemove, onSelect, ColorRemove]
}


export default Admin_Edit_Product_Hook