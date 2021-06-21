import React, {useState, useEffect} from 'react'
import Filter from './filter'
import Box from'@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import ProductsPage from './productsPage'
import "./../../App.css"
import ShopItem from './shopItem'
import Pagination from './pagination'
import axios from 'axios'

const Shop = () => {

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [items, setItems] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [itemsAmmount, setItemsAmmount] = useState(1);

    const getProducts = async() => {
        setLoading(true)
        const res = await axios.get('/product/all', {
            params:{
                toLimit:itemsPerPage,
                toSkip: (currentPage-1)*itemsPerPage
            }
        })
        setItems(res.data)
        setLoading(false)
        setItemsAmmount(res.data.length)
    }

    

    useEffect(()=>{
        getProducts();
        //setPagesNumber();
    }, [currentPage, itemsPerPage])


    const getAmmount = async() => {
        try {
            await axios.get('/product/ammount').then(res=>{
                //console.log(res.data)
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
                        <Grid item xs={4}>
                    <ShopItem name={item.name}></ShopItem>
                </Grid>
                    )
                })}
                </Grid>
                
                <Grid item container justify='center'>
                    <Pagination changePage={changePage} itemsAmmount={50} itemsPerPage={10}></Pagination>   
                </Grid>
    
                </Grid> 
           </Grid> {/* koniec grid conteinera */}
          </> 
    )
}

export default Shop;