import React, { useContext } from 'react'
import Context from '../Context/Context'
import { ProductMenu } from '../Assets/Data/Data'
import toast from 'react-hot-toast';


const Product = () => {

    const { CartList, setCartList,
         setCount,DecrCount,incrCount,
        favrtList, setFavrtList,
        ProductList } = useContext(Context);

    const addTOCart = (item) => {
        let newData = [...CartList];
        let newList = [...ProductList];
        newData.push(item)
        setCartList(newData)
        setCount(newList[item.id - 1].count++);
        toast.success('Added to cart')
        console.log(CartList);
    }
    const addFavrt = (item) => {
        let newData = [...favrtList]
        newData.push(item)
        setFavrtList(newData)
        toast.success('item added to favourites')
    }


    return (
        <>
            {ProductMenu.map((data,ind) => {
                return (
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
                                        <span onClick={() => DecrCount(data,ind)} className='icn icon fas fa-minus'></span>
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
                )
            })}
        </>
    )
}

export default Product