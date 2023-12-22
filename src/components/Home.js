import React, {useEffect, useContext} from 'react'
import { CartContext } from '../global/CartContext'
import '../css/Home.css'
import { Navbar } from './Navbar';
import { Products } from './Products';
import {auth} from '../config/Config'
import {useHistory} from 'react-router-dom'

//************* Home Page ************
export const Home = ({user}) => {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();
    // *** logged in user ***
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })
    return (
        // ****** Calling Navbar and Products to the Home page *****
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}