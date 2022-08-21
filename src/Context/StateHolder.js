import React, { useState } from 'react';
import { CartData, FavouriteData, ProductMenu } from '../Assets/Data/Data';
import Context from './Context'
import toast from 'react-hot-toast';

const Stateholder = (props) => {
    const [CartList, setCartList] = useState(CartData);
    const [favrtList, setFavrtList] = useState(FavouriteData);
    const [ProductList, setProductList] = useState(ProductMenu);
    const [loginScreen, setLoginScreen] = useState(true);

    const [TestHandler, setTestHandler] = useState('');
    const [count, setCount] = useState(0);

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
        }
    }

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


    const states = {
        CartList, setCartList,
        TestHandler, setTestHandler,
        favrtList, setFavrtList,
        count, setCount,loginScreen, setLoginScreen,
        ProductList, setProductList,DecrCount,incrCount,addTOCart,addFavrt
    }

    return (
        <Context.Provider value={states}>
            {props.children}
        </Context.Provider>
    )
}
export default Stateholder