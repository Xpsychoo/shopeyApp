import React, { useContext } from 'react'
import Context from '../Context/Context'
import Navbar from './Navbar';

const Watches = () => {

    const { DecrCount, incrCount, addFavrt, addTOCart, ProductList } = useContext(Context);

    return (
        <>
            <div className='Main_wrapper'>
                <Navbar />
                <div className='container main_content'>
                    <div className='row home_row'>
                        {ProductList.map((data, ind) => {
                            return (data.category === 'Watch' ?
                                <div className='col-md-4 col-xl-4 col-sm-12 col-12' key={data.id}>
                                    <div className='CardBox'>
                                        <div className='imgBox'>
                                            <img className='productImage' src={data.image} alt="" />
                                        </div>
                                        <div className='descBox'>
                                            <p className='Name'>{data.name}</p>
                                            <p className='Price'>{data.price}</p>

                                            {data.count <= 0 ? '' :
                                                <div className='countBox'>
                                                    <span onClick={() => DecrCount(data, ind)} className='icn icon fas fa-minus'></span>
                                                    <span className='icn Text'> {data.count} </span>
                                                    <span onClick={() => incrCount(data)} className='icn icon fas fa-add'></span>
                                                </div>
                                            }

                                        </div>
                                        <div className='optionBox'>
                                            {data.count <= 0 ?
                                                <i title='Add to Cart' onClick={() => addTOCart(data)} className="addIcon fa-solid fa-cart-plus"></i> : ''}
                                            <i title='Favourite' onClick={() => addFavrt(data)} className="fas likeIcon fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                                : '')
                        })}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Watches