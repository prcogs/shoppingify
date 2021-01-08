import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/dist/yup';

import { signup } from "../../actions/authAction"
import { authSelector } from "../../selectors/authSelector"
import svg from '../../images/logo.svg'
import { schemaAuth } from "../../lib/schemaForm"

// import './authForm.scss'

const RegisterForm = ({ changeViewAuth, registerUser, auth, loading }) => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schemaAuth)
    })

    const onSubmit = data => {
        registerUser(data.pseudo, data.password)
    }

    return (
        <div className="authForm">
            <form className="authForm__container" onSubmit={handleSubmit(onSubmit)}>
                <button onClick={() => {changeViewAuth(true)}} className="authForm__btnBack"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> back</button>
                <div className="authForm__titleSite"><img src={svg} alt="Logo Shoppingify"/>Shoppingify</div>
                <p className="authForm__pAuth">Create account</p>
                <p className="authForm__pMsg" style={ auth.succesCreate ? {"backgroundColor" : "#32CD32"} : {"backgroundColor" : "#960909"} }>{auth.msgCreate}</p>
                <label htmlFor="pseudo">Pseudo</label>
                {errors.pseudo && <span className="inputErrors">{errors.pseudo.message}</span>}
                <input type="text" name="pseudo" ref={register} placeholder="Enter your pseudo"/>

                <InputPassword register={register} errors={errors}/>
              
                <button disabled={loading} className="authForm__btnLogin">{loading ? "Please wait": "Create"}</button>
            </form>
        </div>
    )
}

const InputPassword = ({ register, errors }) => {
    const [viewPass, setViewPass] = useState(false)

    const changeViewPass = useCallback((view) => {
        setViewPass(view)
    })

    return (
        <>
            <label htmlFor="password">Password</label>
            {errors.password && <span className="inputErrors">{errors.password.message}</span>}
            <input type={viewPass ? "text" : "password"} name="password" ref={register} placeholder="Enter your password"/>
            {!viewPass && <button onClick={() => {changeViewPass(true)}} className="authForm__btnEyes authForm__btnEyes--register"><i className="fa fa-eye" aria-hidden="true"></i></button>}
            {viewPass && <button onClick={() => {changeViewPass(false)}} className="authForm__btnEyes authForm__btnEyes--register"><i className="fa fa-eye-slash" aria-hidden="true"></i></button>}
        </>
    )
}

const RegisterFormStore = ({ changeViewAuth }) => {
    const auth = useSelector(authSelector)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const registerUser = useCallback(async (pseudo, password) => {
        setLoading(true)
        await dispatch(signup(pseudo, password))
        setLoading(false)
    }, [])

    return <RegisterForm changeViewAuth={changeViewAuth} registerUser={registerUser} loading={loading} auth={auth}/>
}

export default RegisterFormStore