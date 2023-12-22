import React, { useState } from 'react'
import { auth, db } from '../config/Config'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar';

// *****signup or register users 
export const Signup = (props) => {

    // defining the state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Signing up user and empyting fields
    const Signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                setSuccessMsg('Signed successfully.');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div >
            <div className='wrapper'>
                <Navbar />            
            </div>
            <div className='container'>
                <br />
                <h2>Sign up</h2>
                <br />
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                <form autoComplete="off" className='form-group' onSubmit={Signup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setName(e.target.value)} value={name} />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <br />
                    <label htmlFor="passowrd">Password</label>
                    <input type="password" className='form-control' required
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <br />
                    <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
                </form>
                {error && <span className='error-msg'>{error}</span>}
                <br />
                <span>Already have an account? Login
                    <Link to="login"> Here</Link>
                </span>
            </div>
        </div>
    )
}
