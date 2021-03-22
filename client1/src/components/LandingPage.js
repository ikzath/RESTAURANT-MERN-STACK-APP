import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/LandingPage.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function LandingPage() {

return (

    <nav className='header'> 
        {/* logo on the left -> image */}
        <Link to ='/'>
        <img className='header__logo' 
        src='https://mpng.subpng.com/20180514/caq/kisspng-the-farm-of-beverly-hills-cafe-uber-eats-online-fo-5afa532d28c654.233562961526354733167.jpg' />
    
        </Link>    

        {/* Search box */}
        <div className='header__search'>
        <input type='text' className='header__searchInput'></input>
        <SearchIcon className='header__searchIcon' />
        </div>

        {/*  3 links  */}
        <div className='header__nav'> 

        {/* 1st link* */}
        <Link to='/login'  className='header__link'>
        <div className='header__option'>              
            <span className='header__option__line1'>Back to Login Page</span>
            {/* <span className='header__option__line2'>Logout</span> */}
        </div>  
        </Link>

        <Link to='#' className='header__link'>
        <div className='header__option'>              
            <span className='header__option__line1'>Returns</span>
            <span className='header__option__line2'>Orders</span>
        </div>  
        </Link>

        {/* 3rd link* */}
        <Link to='#' className='header__link'>
        <div className='header__option'>              
            <span className='header__option__line1'>Specials</span>
            <span className=' header__option__line2'>Contact</span>
        </div>  
        </Link>

        {/* basket icons with number  */}
        <Link to='#' className='header__link'>
        <div className='header__optionBasket'>
            {/* basket icon */}
            <ShoppingBasketIcon />
            {/* number of items in basket */}
            <span className='header__option__line2 header__basketCount'></span>
        </div>
        </Link>

        </div>
        </nav>
    )
}

export default LandingPage
