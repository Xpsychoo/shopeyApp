import React, { useContext } from 'react'
import Context from '../Context/Context'
import toast from 'react-hot-toast';

const CartCard = () => {
    const { CartList, setCartList, ProductList, count, setCount } = useContext(Context);


    const removeItem = (data, ind) => {
        let newData = [...CartList]
        let newList = [...ProductList];
        if (data.count === 1){
            setCount(newList[data].count--);
            toast.success('item Removed Sucessfully')
        }
        newData.splice(ind, 1)
        setCartList(newData)
        toast.success('item Removed Sucessfully')


    }

    const incrCount = (item) => {
        let newList = [...ProductList];
        setCount(newList[item.id - 1].count++);
    }
    const DecrCount = (item, ind) => {
        let newList = [...ProductList];
        let newCartList = [...CartList]
        setCount(newList[item.id - 1].count--);
        if (count <= 0) {
            newCartList.splice(ind, 1)
            setCartList(newCartList)
            console.log(newCartList);
        }
    }


    return (
        <>
            {CartList.map((data, ind) => {
                return (data.count <= 0 ? '' :
                    <div className='col-md-4 col-xl-4 col-sm-12 col-12' key={data.id}>
                        <div className='CardBox'>
                            <div className='imgBox'>
                                <img className='productImage' src={data.image} alt="" />
                            </div>
                            <div className='descBox'>
                                <p className='Price'>{data.price}</p>
                                <p className='name'>{data.name}</p>

                                <div className='countBox'>
                                    <span onClick={() => DecrCount(data, ind)} className='icn icon fas fa-minus'></span>
                                    <span className='icn Text'> {data.count} </span>
                                    <span onClick={() => incrCount(data)} className='icn icon fas fa-add'></span>
                                </div>
                            </div>
                            <div className='optionBox'>
                                <i onClick={() => removeItem(data, ind)} title='Remove from Cart' className="addIcon fa-solid fa-square-minus"></i>
                                <i title='Favourite' className="likeIcon fas fa-heart"></i>
                            </div>
                        </div>
                    </div>)
            })}

        </>
    )
}

export default CartCard