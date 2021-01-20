import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { yupResolver } from '@hookform/resolvers/dist/yup';
import { useForm } from "react-hook-form";

import { login } from "../../actions/authAction"
import { authSelector } from "../../selectors/authSelector"
import svg from '../../images/logo.svg'
import RegisterFormStore from "../registerForm/registerForm"
import { schemaAuth } from "../../lib/schemaForm";

import './authForm.scss'


const AuthForm = ({ checkLogin, auth, changeViewAuth, loading }) => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schemaAuth)
    })

    const onSubmit = data => {
        checkLogin(data.pseudo, data.password)
    }

    return (
        <div className="authForm">
            <form className="authForm__container"  onSubmit={handleSubmit(onSubmit)}>
                <div className="authForm__titleSite"><img src={svg} alt="Logo Shoppingify"/>Shoppingify</div>
                <p className="authForm__pAuth">Authentification</p>
                <p className="authForm__pMsg">{auth.msg}</p>
                <label htmlFor="pseudo">Pseudo</label>
                {errors.pseudo && <span className="inputErrors">{errors.pseudo.message}</span>}
                <input type="text" name="pseudo" ref={register} placeholder="Enter your pseudo"/>

                <InputPassword register={register} errors={errors}/>

                <button disabled={loading} className="authForm__btnLogin">{loading ? "Please wait": "Login"}</button>
                <p className="authForm__pRegister">Not registered yet? <em onClick={() => {changeViewAuth(false)}}>Register</em></p>
                <p className="authForm__pLazy">If you are a lazy person, click <em onClick={() => {checkLogin("test", "test")}}>here</em> and test app with a global account</p>
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
            {!viewPass && <button onClick={() => {changeViewPass(true)}} className="authForm__btnEyes"><i className="fa fa-eye" aria-hidden="true"></i></button>}
            {viewPass && <button onClick={() => {changeViewPass(false)}} className="authForm__btnEyes"><i className="fa fa-eye-slash" aria-hidden="true"></i></button>}
        </>
    )
}

const AuthFormStore = () => {
    const [viewAuth, setViewAuth] = useState(true)
    const [loading, setLoading] = useState(false)

    const auth = useSelector(authSelector)
    const dispatch = useDispatch()

    const checkLogin = useCallback((pseudo, password) => {
        setLoading(true)
        dispatch(login(pseudo, password))
        setLoading(false)
    })

    const changeViewAuth = useCallback((view) => {
        setViewAuth(view)
    })

    return (
        <>
          {viewAuth && <AuthForm checkLogin={checkLogin} auth={auth} changeViewAuth={changeViewAuth} loading={loading}/>}
          {!viewAuth && <RegisterFormStore changeViewAuth={changeViewAuth}/> }
        </>
    )
}

export default AuthFormStore