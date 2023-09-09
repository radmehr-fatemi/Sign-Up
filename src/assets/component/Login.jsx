import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate';
import { notify } from './notify';
import style from "./SignUp.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setError(validate(data ,"login"))
    }, [data])

    const touchHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const formHandler = event => {
        event.preventDefault()
        if (Object.keys(error).length) {
            setTouched({
                email: true,
                password: true,
            })
            notify("invalid data", "")
        } else {
            notify("Your'e sign up in successfully", "SUCCESS")
        }
    }


    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <div className={style.container}>
            <form className={style.formContainer} onSubmit={formHandler}>

                <h1>Login</h1>

                <div className={style.fieldContainer}>
                    <label htmlFor="">Email</label>
                    <input
                        className={(touched.email && error.email) ? style.unsuccessInput : style.fieldContainerinput}
                        type="text" name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={touchHandler} />
                    {error.email && touched.email && <span> {error.email} </span>}
                </div>

                <div className={style.fieldContainer}>
                    <label htmlFor="">Password</label>
                    <input
                        className={(touched.password && error.password) ? style.unsuccessInput : style.fieldContainerinput}
                        type="password"
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={touchHandler} />
                    {error.password && touched.password && <span> {error.password} </span>}
                </div>

                <div className={style.submitOntainer}>
                    <Link to='/signup'>Sign Up</Link>
                    
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;