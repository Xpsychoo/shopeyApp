import React, { useContext } from 'react'
import Context from '../Context/Context'
import { Link } from 'react-router-dom'
import LogoMain from "../Assets/images/Logo_Main.png";
import toast from 'react-hot-toast';


const Navbar = () => {
    const { setLoginScreen } = useContext(Context);

    const logOutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setLoginScreen(true);
        toast.success('LogOut Successfull')
    }
    return (
        <>
            <nav className="navbar main navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" /* onClick={()=>{console.log(CartList)}} */>
                        <img className='Logo' src={LogoMain} alt='logo' />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" >
                                    <i className='fas fa-home'></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/FavrtList' className="nav-link">
                                    <i className="fas fa-heart"></i>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categories
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to='/Mobile' className="dropdown-item" >
                                            Mobiles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/Watches' className="dropdown-item">
                                            Watches
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/Laptops' className="dropdown-item">
                                            Laptops
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <span className="dropdown-item">
                                            More..
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="End_list">
                            {/* <li className='nav-item'>
                                <i className='nav-link fas fa-bell'></i>
                            </li> */}
                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className='fas fa-user'></i> Ajay Kumar
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className='list-item'>
                                        <span className="dropdown-item">
                                            <i className='icON fas fa-user'></i>    Profile
                                        </span>
                                    </li>
                                    <li className='list-item'>
                                        <span className="dropdown-item">
                                            <i class="icON fa-solid fa-gear"></i>   Settings
                                        </span>
                                    </li>
                                    <li className='list-item'>
                                        <span className="dropdown-item">
                                            <i class="icON fa-solid fa-credit-card"></i>  Payment Methods
                                        </span>
                                    </li>
                                    <li className='list-item'>
                                        <span className="dropdown-item">
                                            <i class="icON fa-solid fa-location-dot"></i>  Address
                                        </span>
                                    </li>
                                    <li onClick={logOutHandler} className='list-item'>
                                        <span className="dropdown-item">
                                            <i class="icON fa-solid fa-power-off"></i> Log Out
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className='list_item'>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar