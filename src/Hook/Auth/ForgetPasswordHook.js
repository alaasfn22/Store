import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { notify } from '../../Utility/Toastify'
import { forgetPassword } from '../../redux/Actions/authAction'
import { useEffect } from 'react'

const ForgetPasswordHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async () => {
        if (email === "") {
            notify("Please enter your email", "warn"); return
        }
        localStorage.setItem("user_email", email)
        setLoading(true)
        await dispatch(forgetPassword({ email: email, }))
        setLoading(false)

    }

    const res = useSelector(state => state.authReducer.forgetPassword)
    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.status === "Success") {
                    notify("تم ارسال الكود للايميل بنجاح", "success")
                    setTimeout(() => {
                        navigate("/user/verifycode")
                    }, 1000);
                }

                if (res.data.message === "There was an error sending the email. Try again later!") {
                    notify("There was an error sending the email. Try again later!", "error")
                }
                if (res.data.status === "fail") {
                    notify("هذا الحساب غير موجود لدينا", "error")
                }
            }
        }
    }, [loading])
    return [email, onChangeEmail, onSubmit]
}

export default ForgetPasswordHook