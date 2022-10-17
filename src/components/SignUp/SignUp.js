import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log("hi", email, password, confirm);

        if (password.length < 6) {
            setError('password must be 6 characters long');
            return;
        }
        if (password !== confirm) {
            setError("your password did not match");
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log("hi");
    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm"> Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit'
                    type="submit" value="Login" />
            </form>
            <p>Already have an account <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;