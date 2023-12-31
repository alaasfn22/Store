import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { notify } from '../../Utility/Toastify'
import { forgetPassword, verifyCode } from '../../redux/Actions/authAction'
import { useEffect } from 'react'

const VerifyCodeHooke = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [verify, setVerify] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangeEmail = (e) => {
        setVerify(e.target.value)
    }

    const onSubmit = async () => {
        if (verify === "") {
            notify("Please enter your code", "warn"); return
        }
        setLoading(true)
        await dispatch(verifyCode({ resetCode: verify, }))
        setLoading(false)

    }

    const res = useSelector(state => state.authReducer.verifyCode)
    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.status === "Success") {
                    notify("كود التفعيل صحيح", "success")
                    setTimeout(() => {
                        navigate("/user/resetpassword")
                    }, 1500);
                }

                if (res.data.status === "fail") {
                    notify("الكود خاطئ او انتهت صلاحيته", "error")
                }
            }
        }
    }, [loading])
    return [verify, onChangeEmail, onSubmit]
}

export default VerifyCodeHooke