import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

//tools
import image from '../../tools/images/Signup.png'

const Signup = () => {

    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

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
                        <input name='name' type='text' placeholder='enter ur username...' value={data.name} onChange={changeHandler} />
                    </div>
                    <div className={styles.formField}>
                        <label>Email</label>
                        <input name='email' type='email' placeholder='example@gmail.com' value={data.email} onChange={changeHandler} />
                    </div>
                    <div className={styles.formField}>
                        <label>Password</label>
                        <input name='password' type='password' placeholder='8+ characters' value={data.password} onChange={changeHandler} />
                    </div>
                    <div className={styles.formField}>
                        <label>Confirm password</label>
                        <input name='confirmPassword' type='password' placeholder='8+ characters' value={data.confirmPassword} onChange={changeHandler} />
                    </div>
                    <button>Sign up</button>
                </form>
            </div>

        </div>
    );
};

export default Signup;