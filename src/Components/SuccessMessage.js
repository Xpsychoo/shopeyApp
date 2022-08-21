import React from 'react'
import { Link } from 'react-router-dom'

const SuccessMessage = () => {
    return (
        <div className='SuccessMain'>
            <div>
                <h3>Congratulations</h3>
                <h3>Your Order was SuccessFull</h3>
                <p>
                    <Link className='linkaddrs' to='/'>Go Back To Home Page</Link>
                </p>
            </div>
        </div>
    )
}

export default SuccessMessage