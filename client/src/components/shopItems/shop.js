import React, { useState, useEffect } from 'react';
import Filter from './filter';
import Grid from '@material-ui/core/Grid';
import './../../App.css';
import ShopItemCard from './shopItemCard';
import Pagination from './pagination';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchItems from '@material-ui/icons/Search';

const Shop = (props) => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [itemsAmmount, setItemsAmmount] = useState(1);
    const { category, subcategory } = useParams();
    const [query, setQuery] = useState('');

    const getProducts = async () => {
        setLoading(true);
        const res = await axios.get(`/product/`, {
            params: {
                toLimit: itemsPerPage,
                toSkip: (currentPage - 1) * itemsPerPage,
                category: category,
                subcategory: subcategory,
            },
        });
        console.log(res.data);
        setItems(res.data);
        setLoading(false);
        //setItemsAmmount(res.data.length)
    };

    const getSearched = () => {
        axios
            .get(`/product/get/search/${query}`)
            .then((res) => {
                setItems(res.data);
                setItemsAmmount(res.data.length);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const getProducts = async () => {
    //     setLoading(true);
    //     const res = await axios.get(`/product/`, {
    //         params: {
    //             category: category,
    //             subcategory: subcategory,
    //             toLimit: itemsPerPage,
    //             toSkip: (currentPage - 1) * itemsPerPage,
    //         },
    //     });
    //     console.log(res.data);
    //     setItems(res.data);
    //     setLoading(false);
    //     //setItemsAmmount(res.data.length)
    // };

    useEffect(() => {
        getProducts();
        console.log({ category, subcategory });
        //setPagesNumber();
    }, [currentPage, itemsPerPage, category, subcategory]);

    const getAmmount = async () => {
        try {
            await axios.get('/product/ammount/get').then((res) => {
                console.log(res.data);
                setItemsAmmount(res.data);
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        //getProducts();
        getAmmount();
    }, []);

    const changePage = (pageToChange) => {
        setCurrentPage(pageToChange);
    };

    const nextPage = () => {
        if (currentPage) setCurrentPage((prevState) => prevState + 1);
    };

    const previousPage = () => {
        if (currentPage !== 1) setCurrentPage((prevState) => prevState - 1);
    };

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}></Grid>
                <Grid item xs={2}>
                    {' '}
                    {/* FILTER CONTAINER */}
                    <Filter></Filter>
                </Grid>

                <Grid container item xs={10} sm={10} xl={8} justify='center'>
                    {' '}
                    {/* CONTEINER WITH ITEMS AND PAGINATION */}
                    <Grid container xs={11} sm={11} spacing={5}>
                        {' '}
                        {/* ITEMS CONTAINER */}
                        {items.map((item) => {
                            return (
                                <Grid item key={item._id} xs={4}>
                                    <ShopItemCard
                                        _id={item._id}
                                        name={item.name}
                                        photo_id={item.photo_id}
                                        price={item.price}
                                    ></ShopItemCard>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid item container justify='center'>
                        <SearchItems searchData={setQuery} searchFunction={getSearched}></SearchItems>
                        <Pagination changePage={changePage} itemsAmmount={itemsAmmount} itemsPerPage={10}></Pagination>
                    </Grid>
                </Grid>
            </Grid>{' '}
            {/* koniec grid conteinera */}
        </>
    );
};

export default Shop;
