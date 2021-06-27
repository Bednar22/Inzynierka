import React, {useState, useEffect} from 'react'
import Filter from './filter'
import Box from'@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import ProductsPage from './productsPage'
import "./../../App.css"
import ShopItemCard from './shopItemCard'
import Pagination from './pagination'
import axios from 'axios'
import FilterCategory from './filterCategory'

const Shop = () => {

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [items, setItems] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [itemsAmmount, setItemsAmmount] = useState(1);
    const [cat, setCat] = useState('')

    const getProducts = async() => {
        setLoading(true)
        const res = await axios.get(`/product/`, {
            params:{
                category:cat,
                toLimit:itemsPerPage,
                toSkip: (currentPage-1)*itemsPerPage
            }
        })
        console.log(res.data)
        setItems(res.data)
        setLoading(false)
        //setItemsAmmount(res.data.length)
    }

    

    useEffect(()=>{
        getProducts();
        //setPagesNumber();
    }, [currentPage, itemsPerPage])


    const getAmmount = async() => {
        try {
            await axios.get('/product/ammount/get').then(res=>{
                console.log(res.data)
                setItemsAmmount(res.data)
                
            })
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getAmmount()
    },[])

    const changePage = (pageToChange) => {
        setCurrentPage(pageToChange)
    }

    const nextPage = () => {
        if(currentPage)
        setCurrentPage((prevState)=> prevState+1)
    }

    const previousPage = () => {
        if(currentPage!==1)
        setCurrentPage((prevState)=> prevState-1)
    }

    return (
        <>
            <Grid container spacing={6}>
           
            <Grid item  xs={2}> {/* FILTER CONTAINER */}
                <Filter></Filter>
            </Grid>

            <Grid container item xs={10} xl={8} justify='center'> {/* CONTEINER WITH ITEMS AND PAGINATION */}

                <Grid container spacing={3}> {/* ITEMS CONTAINER */}
                {items.map((item)=> {
                    return(
                        <Grid item key={item._id} xs={4}>
                    <ShopItemCard  _id={item._id} name={item.name}></ShopItemCard>
                </Grid>
                    )
                })}
                </Grid>
                
                <Grid item container justify='center'>
                    <Pagination changePage={changePage} itemsAmmount={itemsAmmount} itemsPerPage={10}></Pagination>   
                </Grid>
    
                </Grid> 
           </Grid> {/* koniec grid conteinera */}
          </> 
    )
}

export default Shop;