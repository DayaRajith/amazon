import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

  const[{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to ="/">
      <img className = "header_logo" src = "https://pngimg.com/uploads/amazon/small/amazon_PNG25.png" />
      </Link>
   
    <div className = "header_search"> 
  <input className='header_searchInput' type = "text"/>
     <SearchIcon className='header_searchIcon'/>



  <div/>
</div>
    <div className = "header_nav"> 
    <Link to='/login'>
    <div className='header_option'>
      <span className='header_OptionLineOne'>Helloo Guest</span>
      <span className='header_OptionLineTwo'>Sign in</span>
    </div>
    </Link>

    <div className='header_option'>
      <span className='header_OptionLineOne'>Returns</span>
      <span className='header_OptionLineTwo'>& Orders</span>
    </div>

    <div className='header_option'>
    <span className='header_OptionLineOne'>Your</span>
      <span className='header_OptionLineTwo'>Prime</span>
    </div>
<Link to="/checkout">
<div className='header_optionBasket'>
  <ShoppingBasketIcon />
  <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
</div>
</Link>



    </div>
    </div>
    
  ) 
}

export default Header;

