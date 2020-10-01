import React from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import logo from './Images/logo.jpg';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from './StateProvider';
import './header.scss';
import { auth } from './firebase';

const Header=()=> {
    const [{basket,user}] = useStateValue();
    console.log(basket);

    const login =()=>{
        if (user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
        <Link to="/">
        {/* Header Logo */}
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon-logo" className="header_logo" />
        </Link>
        {/* Search box */}
        <div className="header_search">
        <input type='text' className='header_searchinput' />
        <SearchIcon className="header_searchicon" />
        </div>

        {/* Three Links */}
        <div className="header_nav">
            {/* First Link */}
            <Link to='/login' className="header_link">
            <div className="header_option">
                <span className="header_option_lineone">Hello, {user?.email}</span>
                <span className="header_option_linetwo">{user? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to={!user &&'/login'} className="header_link">
            <div onClick={login} className="header_option">
                <span className="header_option_lineone">Returns</span>
                <span className="header_option_linetwo" >& Orders</span>
                </div>
            </Link>
            {/* Shopping Cart */}
            <Link to='/checkout' className="header_link">
            <div className="header_optionBasket">
                <ShoppingCartOutlinedIcon />
                <span>{basket?.length}</span>
                </div>
            </Link>

        </div>
            
        </nav>
    )
}

export default Header;
