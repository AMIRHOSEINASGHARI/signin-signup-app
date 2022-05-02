import React, { useEffect, useState } from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

//functions
import { validation } from '../../functions/validation';

//tools
import image from '../../tools/images/Signup.png'

const Signup = () => {

    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors , setErrors] = useState({})
    const [onFocus , setOnFocus] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false
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
        setErrors(validation(data))
        console.log(errors)
    }, [data])

    return (
        <div className={styles.signupContainer}>
            <div className={styles.imageSection}>
                <img src={image} alt='image' />
            </div>


            <div className={styles.formSection}>
                <form>
                    <div className={styles.header}>
                        <p>Already have an account?</p>
                        <Link to='/signin'>Sign in</Link>
                    </div>
                    <div className={styles.heading}>
                        <h3>Welcome to Focus!</h3>
                        <p>Register your account</p>
                    </div>
                    <div className={styles.formField}>
                        <label>Name</label>
                        <input name='name' type='text' placeholder='enter ur username...' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.name && onFocus.name && errors.name}</span>
                    </div>
                    <div className={styles.formField}>
                        <label>Email</label>
                        <input name='email' type='email' placeholder='example@gmail.com' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.email && onFocus.email && errors.email}</span>
                    </div>
                    <div className={styles.formField}>
                        <label>Password</label>
                        <input name='password' type='password' placeholder='8+ characters' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.password && onFocus.password && errors.password}</span>
                    </div>
                    <div className={styles.formField}>
                        <label>Confirm password</label>
                        <input name='confirmPassword' type='password' placeholder='8+ characters' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.confirmPassword && onFocus.confirmPassword && errors.confirmPassword}</span>
                    </div>
                    <button>Sign up</button>
                </form>
            </div>

        </div>
    );
};

export default Signup;