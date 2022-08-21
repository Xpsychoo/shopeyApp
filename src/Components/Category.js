import React, { useState,useContext } from 'react'
import axios from "axios";
import Navbar from './Navbar';
import Context from '../Context/Context'


const Category = () => {

    const {addTOCart,addFavrt } = useContext(Context);

    const [post, setPost] = useState([]);

    const baseURL = "https://fakestoreapi.com/products";

    axios.get(baseURL).then((response) => {
        setPost(response.data);
    });

    return (
        <>
            <div className='Main_wrapper'>
                <Navbar />
                <div className='container main_content'>
                    <div className='row home_row'>
                        {post.map((data) => {
                            return (
                                <div className='col-md-4 col-xl-4 col-sm-12 col-12' key={data.id}>
                                    <div className='CardBox'>
                                        <div className='imgBox'>
                                            <img className='productImage w-100' src={data.image} alt="" />
                                        </div>
                                        <div className='descBox'>
                                            <p className='name'>{data.title}</p>
                                            <p className='Price'>₹ {data.price}</p>
                                            <div className='ratingBox'>
                                                <div className='rating'>
                                                    {data.rating.rate}
                                                    <i class="fa-solid fa-star"></i>
                                                    <span className='ratingCount'>({data.rating.count})</span>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className='optionBox'>
                                        {data.count <= 0 ? '' :  <i onClick={() => addTOCart(data)} className="addIcon fa-solid fa-cart-plus"></i>}
                                            <i onClick={() => addFavrt(data)} title='Favourite' className="likeIcon fas fa-heart"></i>
                                        </div>
                                    </div>
                                </div>)
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category

