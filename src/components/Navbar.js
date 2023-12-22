import React, {useContext}from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/Focus.PNG'
import { auth } from '../config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../global/CartContext'

export const Navbar = ({user}) => {

    const { totalQty } = useContext(CartContext);
    const history = useHistory();    

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }//padding-right: 40cm;

    return (
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt="" />                
            </div>
            <div className='homebtn'>
                <span><Link to="/" className='firstlink'>HOME</Link></span>                
                <span><Link to="contactus" className='firstlink'>CONTACT US</Link></span>
            </div>
            {/*if user is not logged in or no user at all*/}
            {!user && <div className='rightside'>
                
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
            {/*if user is logged in*/}
            {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>                
                <span className='no-of-products'>{totalQty}</span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>                
                <span><button className='logout-btn' onClick={handleLogout}>LOGOUT</button></span>
            </div>}
        </div>
        
    )
}