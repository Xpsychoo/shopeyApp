import React, { useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import Context from '../Context/Context'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {CartList, setCartList, ProductList, count, setCount } = useContext(Context);
    const [cartTotal, setcartTotal] = useState(0)
    const [viewPay, setViewPay] = useState('view');

    const sumTotal = () => {
        let total = 0
        CartList.forEach((item) => {
            let newww = item.price.replaceAll(',', '')
            total += +newww
            setcartTotal(total * item.count)
        })
    }
    const resetCart = () => {
        CartList.item.count(0);
        setCartList([]);
        setCount(0);
    }

    const incrCount = (item) => {
        let newList = [...ProductList];
        setCount(newList[item.id - 1].count++);
    }

    const DecrCount = (item) => {
        let newList = [...ProductList];
        if (count <= 1) {
            setCount(0)
        } else {
            setCount(newList[item.id - 1].count--);
        }
    }

    useEffect(() => {
        sumTotal()
    })


    return (
        <div className='Main_wrapper'>
            <Navbar />
            {CartList.length === 0 ? <div className='NoList'><div><p onClick={()=>{console.log(CartList)}}>Unable to Checkout</p> <p>Your List is Empty !</p>
                <Link to='/' className='fas text-light fa-home'></Link>
            </div></div> :

                <div className='CheckoutContent'>
                    <section className="content">
                        <div className='cartTItems'>
                            {CartList.map((data) => {
                                return (data.count <= 0 ? '' :
                                    <div className='ChckItem row'>
                                        <div className='col-md-3 col-xl-3 xol-sm-3 col-3 Img_box'>
                                            <img className='chckImg' src={data.image} alt="   " />
                                        </div>
                                        <div className='col-md-6 col-xl-6 xol-sm-6 col-6'>
                                            <p className='name'>{data.name}</p>
                                        </div>
                                        <div className='col-md-3 col-xl-3 xol-sm-3 col-3'>
                                            <p className='price'>₹ {data.price}</p>
                                            <div className='countBox'>
                                                <span onClick={() => DecrCount(data)} className='icn icon fas fa-minus'></span>
                                                <span className='icn Text'> {data.count} </span>
                                                <span onClick={() => incrCount(data)} className='icn icon fas fa-add'></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='subtotal row'>
                            <div className='col-md-9 col-xl-9 xol-sm-9 col-9'>
                                <p className='totalHead' onClick={()=>{console.log(CartList)}}> Total amount is : </p>
                            </div>
                            <div className='col-md-3 col-xl-3 xol-sm-3 col-3'>
                                <p className='price'> ₹ {cartTotal}
                                </p>
                            </div>
                        </div>
                        <div className="collapse" id="PaymentMethod">
                            <div>
                                <div className="payment">
                                    <div className="payment__title">Payment Method</div>
                                    <div className="payment__types">
                                        <div className="payment__type payment__type--cc active">
                                            <i className="icon icon-credit-card" />
                                            Credit Card
                                        </div>
                                        <div className="payment__type payment__type--paypal">
                                            <i className="icon icon-paypal" />
                                            Paypal
                                        </div>
                                        <div className="payment__type payment__type--paypal">
                                            <i className="icon icon-wallet" />
                                            SEPA
                                        </div>
                                        <div className="payment__type payment__type--paypal">
                                            <i className="icon icon-note" />
                                            Invoice
                                        </div>
                                    </div>
                                    <div className="payment__info">
                                        <div className="payment__cc">
                                            <div className="payment__title">
                                                <i className="icon icon-user" />
                                                Personal Information
                                            </div>
                                            <form>
                                                <div className="form__cc">
                                                    <div className="row">
                                                        <div className="field">
                                                            <div className="title">Credit Card Number</div>
                                                            <input
                                                                type="text"
                                                                className="input txt text-validated"
                                                                defaultValue="4542 9931"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="field small">
                                                            <div className="title">Expiry Date</div>
                                                            <select className="input ddl">
                                                                <option selected="">01</option>
                                                                <option>02</option>
                                                                <option>03</option>
                                                                <option>04</option>
                                                                <option>05</option>
                                                                <option>06</option>
                                                                <option>07</option>
                                                                <option>08</option>
                                                                <option>09</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                            </select>
                                                            <select className="input ddl">
                                                                <option>01</option>
                                                                <option>02</option>
                                                                <option>03</option>
                                                                <option>04</option>
                                                                <option>05</option>
                                                                <option>06</option>
                                                                <option>07</option>
                                                                <option>08</option>
                                                                <option>09</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                                <option>13</option>
                                                                <option>14</option>
                                                                <option>15</option>
                                                                <option selected="">16</option>
                                                                <option>17</option>
                                                                <option>18</option>
                                                                <option>19</option>
                                                                <option>20</option>
                                                                <option>21</option>
                                                                <option>22</option>
                                                                <option>23</option>
                                                                <option>24</option>
                                                                <option>25</option>
                                                                <option>26</option>
                                                                <option>27</option>
                                                                <option>28</option>
                                                                <option>29</option>
                                                                <option>30</option>
                                                                <option>31</option>
                                                            </select>
                                                        </div>
                                                        <div className="field small">
                                                            <div className="title">
                                                                CVV Code
                                                                <span className="numberCircle">?</span>
                                                            </div>
                                                            <input type="text" className="input txt" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="field">
                                                            <div className="title">Name on Card</div>
                                                            <input type="text" className="input txt" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="payment__shipping">
                                            <div className="payment__title">
                                                <i className="icon icon-plane" /> Shiping Information
                                            </div>
                                            <div className="details__user">
                                                <div className="user__name">
                                                    John Doe
                                                    <br /> 13/03/1980
                                                </div>
                                                <div className="user__address">
                                                    Shipping Address: 22 Street, Address
                                                    <br />
                                                    Country
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="actions">
                                    <Link to='/cart' className="BasicLink">
                                        Go Back
                                    </Link>
                                    <Link to='/SuccessMessage' onClick={resetCart} className="btnMain">
                                        Place your Order
                                        <i className="fas angleRight fa-angle-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {viewPay === 'view' ?
                            <div className='ContinueBtn'>
                                <Link className='BasicLink' to='/cart' >
                                    Go Back
                                </Link>
                                <button
                                    onClick={() => { setViewPay('dont') }}
                                    className="btnMain"
                                    type="button"
                                    href='#PlaceOrder'
                                    data-bs-toggle="collapse"
                                    data-bs-target="#PaymentMethod"
                                    aria-expanded="false"
                                    aria-controls="PaymentMethod"
                                >
                                    Continue <i class="fa-solid rightIcon fa-angle-right"></i>
                                </button>
                            </div>
                            : null}
                    </section>
                </div>
            }
        </div>
    )
}

export default Checkout;