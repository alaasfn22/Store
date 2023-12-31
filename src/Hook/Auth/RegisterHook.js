import React, { useEffect, useState } from 'react'
import { notify } from '../../Utility/Toastify'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser } from '../../redux/Actions/authAction'
import { useNavigate } from 'react-router-dom'

const RegisterHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassWord] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)

    }
    const onChangePassword = (e) => {
        setPassWord(e.target.value)
    }
    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }
    const validation = () => {
        if (name === "") {
            notify("Please enter your name", "warn");
        }
        // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email === "") {
            notify("Please enter your email", "warn");
            return;
        }
        if (phone === "" || phone.length <= 10) {
            notify("Please enter valid mobile number", "warn");
            return;
        }
        if (password.length < 6) {
            notify('Your password length less than 6', "error");
            return;
        }
        if (password !== passwordConfirm) {
            notify('Your password and confirm password not match', "error");
            return;
        }
    }

    const onSubmite = async (e) => {
        validation();
        setLoading(true)
        await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm,
            phone,
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.createUser)
    useEffect(() => {
        if (loading === false) {
            if (res) {

                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    notify("An account has been created successfully", "success")
                    setTimeout(() => {
                        navigate('/login')
                    }, 1500);
                }
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "E-mail already in use") {
                        notify("E-mail already in use", "error")
                    }

                }
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "must be at least 3 chars")
                        notify("The name must be at least 3 chars", "error")
                }
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "Invalid email formate")
                        notify("Invalid email formate @email.com", "error")
                }
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "accept only egypt phone numbers")
                        notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error")
                }

            }
        }

    }, [loading])


    return [name, email, phone, password, passwordConfirm, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangePasswordConfirm, onSubmite]
}

export default RegisterHook
