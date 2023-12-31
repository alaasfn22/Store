import React, { useEffect, useState } from 'react'
import { notify } from '../../Utility/Toastify'
import { loginUser } from '../../redux/Actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [loading, setLoading] = useState(true)
    const [onpress, setOnPress] = useState(false)

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassWord(e.target.value);
    }

    const validation = () => {
        if (email === "") {
            notify("Please enter your email", "warn"); return;
        }
        if (password === "") {
            notify("Please enter your password", "warn"); return;
        }
    }

    const res = useSelector(state => state.authReducer.login)

    const onSubmite = async (e) => {
        validation();
        setLoading(true)
        setOnPress(true)
        await dispatch(loginUser({ email, password }))
        setLoading(false)
        console.log("done")
    }
    useEffect(() => {
        if (loading === false) {

            if (res) {
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("data", JSON.stringify(res.data.data))
                    notify("Login successfully", "success")
                    setTimeout(() => {
                        navigate("/")
                        window.location.reload(false)
                    }, 1500);

                } else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("data")
                }

                if (res.data) {
                    if (res.data.message === "Incorrect email or password") {
                        notify("Incorrect email or password", "error")
                        localStorage.removeItem("token")
                        localStorage.removeItem("data")
                    }
                }
            }

            setTimeout(() => {
                setOnPress(false)
            }, 2500);
            setLoading(true)

        }
    }, [loading]);

    return [email, password, loading, onpress, onChangeEmail, onChangePassword, onSubmite]
}

export default LoginHook