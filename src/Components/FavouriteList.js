import React, { useContext } from 'react'
import Navbar from './Navbar'
import Context from '../Context/Context'
import toast from 'react-hot-toast';

const FavouriteList = () => {
    const { favrtList, setFavrtList, CartList, setCartList, DecrCount, incrCount } = useContext(Context);

    const addTOCart = (item) => {
        let newData = [...CartList]
        newData.push(item)
        setCartList(newData)
        toast.success('Added to cart Sucessfullly')
    }
    const RemoveData = (ind) => {
        let newData = [...favrtList]
        newData.splice(ind, 1)
        setFavrtList(newData)
        toast.success('item Removed')
    }

    return (
        <>
            <div className='Main_wrapper'>
                <Navbar />
                <div className='container main_content'>
                    <div className='row home_row'>
                        {favrtList.length === 0 ?
                            <>
                                <div className='NoList'>Favourite List is Empty !</div>
                            </> : <>
                                {favrtList.map((data, ind) => {
                                    return <div className='col-md-4 col-xl-4 col-sm-12 col-12' key={data.id}>
                                        <div className='CardBox'>
                                            <div className='imgBox'>
                                                <img className='productImage' src={data.image} alt="" />
                                            </div>
                                            <div className='descBox'>
                                                <p className='Price'>{data.price}</p>
                                                <p className='DescipTion'>{data.Description}</p>

                                                <div className='countBox'>
                                                    <span onClick={() => DecrCount(data, ind)} className='icn icon fas fa-minus'></span>
                                                    <span className='icn Text'> {data.count} </span>
                                                    <span onClick={() => incrCount(data)} className='icn icon fas fa-add'></span>
                                                </div>
                                            </div>
                                            <div className='optionBox'>
                                                <i title='Add to Cart' onClick={() => addTOCart(data)} className="addIcon fa-solid fa-cart-plus"></i>
                                                <i title='Remove from' onClick={() => RemoveData(ind)} className="likeIcon active fas fa-heart"></i>
                                            </div>
                                        </div>
                                    </div>
                                })}</>}


                    </div>

                </div>
            </div>
        </>
    )
}

export default FavouriteList