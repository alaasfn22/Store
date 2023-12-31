import { useEffect, useState } from "react"
import ProductSearchHook from "../ProductHook/ProductSearchHook"
import { Link } from "react-router-dom"

const NavBarSearchHook = () => {
    const [searchWord, setSearchWord] = useState("")
    const [items, loading, pagecount, paginationSelected, results, getSearch] = ProductSearchHook()
    const handelSearch = (e) => {
        window.sessionStorage.setItem("searchword", e.target.value)
        setSearchWord(e.target.value)
        let path = window.location.pathname
        if (path !== "/allproducts") {
            // <Link to="/allproducts"></Link>
            window.location.href = "/allproducts"
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getSearch()
        }, 1000)
    }, [searchWord]);

    return [searchWord, handelSearch]
}

export default NavBarSearchHook