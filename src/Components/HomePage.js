import React from 'react'
import Navbar from './Navbar'
import Product from './Product'

const HomePage = () => {

    return (
        <div className='Main_wrapper'>
            <Navbar />
            <div className='container main_content'>
                <div className='row home_row'>
                    <Product />
                </div>

            </div>
            
        </div>
    )
}

export default HomePage