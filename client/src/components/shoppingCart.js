import axios from 'axios'
import React, {useState, useEffect} from 'react'

const ShoppingCart = () => {

    const[products, setProducts] = useState([])

    const getProducts = () => {
        const productsIds = localStorage.getItem('cart')
        if(productsIds || productsIds===''){
             console.log(productsIds)
             axios.get('/product/get/all', {
                    params:{
                        productsIds: productsIds
                        
                    }
                }).then(res=>{
                    console.log(res.data)
                    setProducts(res.data)
                })
        } else{
            return;
        }


    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <div>

            {products.map((item)=>{
                return(
                    <>
                    <h1>
                        {item.name}
                    </h1>
                    <h1>
                        {item._id}
                    </h1>
                    </>
                )
            })}


        </div>
    )
}

export default ShoppingCart;