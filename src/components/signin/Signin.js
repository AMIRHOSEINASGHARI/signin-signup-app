import React, { useEffect, useState } from 'react';
import styles from './Signin.module.css';
import { Link } from 'react-router-dom';

//functions
import { signinValidation } from '../../functions/validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../functions/toast';

//tools
import image from '../../tools/images/Signup.png'

const Signup = () => {

    const [data , setData] = useState({
        name: "",
        password: "",
    })

    const [errors , setErrors] = useState({})
    const [onFocus , setOnFocus] = useState({
        name: false,
        password: false,
    })

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const focusHandler = (e) => {
        setOnFocus({
            [e.target.name]: true
        })
    }

    useEffect(() => {
        setErrors(signinValidation(data))
        console.log(errors)
    }, [data])

    const submitHandler = (e) => {
        e.preventDefault()
        setOnFocus({
            name: true,
            password: true,
        })
        if(Object.keys(errors).length === 0) {
            notify('success' , 'Signd up successfully!')
        }else {
            notify('error' , 'Unvalid data!')
        }
    }

    return (
        <div className={styles.signinContainer}>
            <div className={styles.imageSection}>
                <img src={image} alt='image' />
            </div>


            <div className={styles.formSection} onSubmit={submitHandler}>
                <form>
                    <div className={styles.header}>
                        <p>Don't have an account?</p>
                        <Link to='/'>Sign Up</Link>
                    </div>
                    <div className={styles.formField}>
                        <label>Name</label>
                        <input name='name' type='text' placeholder='enter ur username...' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.name && onFocus.name && errors.name}</span>
                    </div>
                    <div className={styles.formField}>
                        <label>Password</label>
                        <input name='password' type='password' placeholder='8+ characters' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.password && onFocus.password && errors.password}</span>
                    </div>
                    <button>Sign in</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;