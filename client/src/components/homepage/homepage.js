import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularItems from './popularItems';
import SearchItems from '@material-ui/icons/Search';
const Homepage = () => {
    useEffect(() => {
        axios
            .get('/product/get/search/p')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <>
            <PopularItems></PopularItems>
        </>
    );
};

export default Homepage;
