import React, { useContext } from 'react'
import CartCard from './CartCard'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Context from '../Context/Context'

const Cart = () => {
    const { CartList } = useContext(Context);
    return (
        <>
            <div className='Main_wrapper'>
                <Navbar />
                <div className='container main_content'>
                    <div className='row home_row'>
                        {CartList.length === 0 &&  CartList.count !== 0  ? <div className='NoList'> Your Cart Is Empty !</div> : 
                         <CartCard />}
                    </div>
                    {CartList.length === 0 ?  '' :  
                    <div className='container chkOutbX'>
                        <div className='col-md-8 col-xl-8 col-sm-6 col-6'>
                            <h3 className='text-light'>Proceed to checkout </h3>

                        </div>
                        <div className='col-md-4 col-xl-4 col-sm-6 col-6 text-end'>
                            <Link to='/Checkout' className='btnMain'>Checkout</Link>
                        </div>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default Cart