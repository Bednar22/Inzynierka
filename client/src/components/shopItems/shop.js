import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import './../../App.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, TextField, Paper } from '@material-ui/core';
//My comps
import Pagination from './pagination';
import ShopItemCard from './shopItemCard';
import Filter from './filter';
import SortComp from './sortComp';
import SearchComp from './searchComp';

const Shop = (props) => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [itemsAmmount, setItemsAmmount] = useState(1);
    const { category, subcategory } = useParams();
    const [query, setQuery] = useState('');
    const [sortBy, setSortBy] = useState('Popularne');
    const [sortType, setSortType] = useState({ popularity: -1 });
    //
    const getProducts = async () => {
        const res = await axios.get(`/product/`, {
            params: {
                toLimit: itemsPerPage,
                toSkip: (currentPage - 1) * itemsPerPage,
                category: category,
                subcategory: subcategory,
                sortType: sortType,
            },
        });
        console.log(res.data);
        setItems(res.data);
    };

    const getSearched = () => {
        if (!query) {
            getProducts();
            return;
        }
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
    }, [currentPage, category, subcategory, sortType, sortBy]);

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
                <Grid item sm={2}></Grid>
                <Grid container item xs={10} sm={10} justify='center'>
                    <Grid container sm={11} xs={11} spacing={5} alignItems='center' justify='space-between'>
                        <Grid item>
                            <SortComp setSortType={setSortType} sortBy={sortBy} setSortBy={setSortBy}></SortComp>
                        </Grid>
                        <Grid item>
                            <SearchComp setQuery={setQuery} getSearched={getSearched}></SearchComp>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={1} sm={1}></Grid> */}
                </Grid>
                {/* FILTER CONTAINER */}
                <Grid item xs={2}>
                    <Filter></Filter>
                </Grid>
                {/* CONTEINER WITH ITEMS AND PAGINATION */}
                <Grid container item xs={10} sm={10} xl={10} justify='center'>
                    {/* ITEMS CONTAINER */}
                    <Grid container xs={11} sm={11} spacing={5}>
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
                        <Pagination
                            changePage={changePage}
                            nextPage={nextPage}
                            previousPage={previousPage}
                            itemsAmmount={itemsAmmount}
                            itemsPerPage={10}
                        ></Pagination>
                    </Grid>
                </Grid>
            </Grid>
            {/* koniec grid conteinera */}
        </>
    );
};

export default Shop;
