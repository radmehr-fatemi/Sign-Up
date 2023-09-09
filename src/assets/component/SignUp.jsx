import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate';
import { notify } from './notify';
import style from "./SignUp.module.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    })

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setError(validate(data ,'signup'))
    }, [data])

    const touchHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const formHandler = event => {
        event.preventDefault()
        if (Object.keys(error).length) {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
            notify("invalid data", "")
        } else {
            notify("Your'e sign up in successfully", "SUCCESS")
        }
    }


    const changeHandler = event => {
        const name = event.target.name;
        if (name === 'isAccepted') {
            setData({ ...data, [name]: event.target.checked })
        } else {
            setData({ ...data, [name]: event.target.value })
        }
    }

    return (
        <div className={style.container}>
            <form className={style.formContainer} onSubmit={formHandler}>

                <h1>Sign Up</h1>

                <div className={style.fieldContainer}>
                    <label htmlFor="">Name</label>
                    <input
                        className={(touched.name && error.name) ? style.unsuccessInput : style.fieldContainerinput}
                        type="text"
                        name='name'
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={touchHandler} />
                    {error.name && touched.name && <span> {error.name} </span>}
                </div>

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

                <div className={style.fieldContainer}>
                    <label htmlFor="">Confirm Password</label>
                    <input
                        className={(touched.confirmPassword && error.confirmPassword) ? style.unsuccessInput : style.fieldContainerinput}
                        type="password"
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={touchHandler} />
                    {error.confirmPassword && touched.confirmPassword && <span> {error.confirmPassword} </span>}
                </div>

                <div className={style.fieldcHECKContainer}>
                    <div className={style.checkBox}>
                        <label htmlFor=""> I accept the ruels</label>
                        <input
                            type="checkbox"
                            name='isAccepted'
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={touchHandler} />
                    </div>
                    {error.isAccepted && touched.isAccepted && <span> {error.isAccepted} </span>}
                </div>
                <div className={style.submitOntainer}>
                    <Link to='/login'>Login</Link>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;